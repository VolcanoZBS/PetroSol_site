import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Facebook, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import { SiGoogle } from "react-icons/si";
import logo from '../assets/images/Logo.png';
import { useTranslation } from "react-i18next";

export default function Footer() {
  const [showPolicy, setShowPolicy] = React.useState(false);
  const [privacyText, setPrivacyText] = React.useState<string>("");
  const [loadingPrivacy, setLoadingPrivacy] = React.useState(false);
  const [privacyError, setPrivacyError] = React.useState<string | null>(null);
  const { t, i18n } = useTranslation();

  React.useEffect(() => {
    if (!showPolicy) return;
    const load = async () => {
      setLoadingPrivacy(true);
      setPrivacyError(null);
      try {
        const lng = (i18n.language || "ro").startsWith("en") ? "en" : "ro";
        const mod = await import(
          /* @vite-ignore */ `../locales/${lng}/privacyConsent.json`
        );
        const raw = (mod as any).privacyContent || (mod.default && mod.default.privacyContent) || "";
        setPrivacyText(raw);
      } catch (e) {
        setPrivacyError("Nu s-a putut încărca documentul.");
      } finally {
        setLoadingPrivacy(false);
      }
    };
    load();
  }, [showPolicy, i18n.language]);

  return (
    <>
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src={logo} alt="PetroSol Logo" className="h-8 w-auto mr-2" />
                <h3 className="text-xl font-bold">PetroSol</h3>
              </div>
              <p className="text-gray-300 mb-4">{t("footer.tagline")}</p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/Petrol.Solutions/"
                  className="text-gray-300 hover:text-white transition-colors"
                  target="_blank" rel="noopener noreferrer"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://share.google/gCArcW0EpSU6NoJRN"
                  className="text-gray-300 hover:text-white transition-colors"
                  target="_blank" rel="noopener noreferrer"
                >
                  <SiGoogle className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/petrol-solutions/?originalSubdomain=ro"
                  className="text-gray-300 hover:text-white transition-colors"
                  target="_blank" rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">{t("footer.contactTitle")}</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Bulevardul Primăverii 51, București</p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                  <a
                    href="tel:+40123456789"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    +40 738 100 020
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                  <a
                    href="mailto:office@petrosol.ro"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    office@petrosol.ro
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">{t("footer.infoTitle")}</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/about"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {t("footer.about")}
                  </a>
                </li>
                <li>
                  <a
                    href="/solutions"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {t("footer.solutions")}
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    className="text-gray-300 hover:text-white transition-colors"
                    onClick={() => setShowPolicy(true)}
                  >
                    {t("footer.privacy")}
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              &copy; {new Date().getFullYear()} PetroSol. {t("footer.rights")}
            </p>
          </div>
        </div>
      </footer>

      <Dialog
        open={showPolicy}
        onClose={() => setShowPolicy(false)}
        aria-labelledby="privacy-dialog-title"
        aria-describedby="privacy-dialog-description"
        maxWidth="md"
        fullWidth
      >
        <DialogTitle id="privacy-dialog-title">
          {t("footer.privacyTitle")}
        </DialogTitle>
        <DialogContent dividers>
          {loadingPrivacy && (
            <DialogContentText sx={{ fontStyle: "italic" }}>
              {t("loading", "Se încarcă...")}
            </DialogContentText>
          )}
          {privacyError && (
            <DialogContentText color="error">
              {privacyError}
            </DialogContentText>
          )}
          {!loadingPrivacy && !privacyError && (
            <DialogContentText
              id="privacy-dialog-description"
              sx={{ whiteSpace: "pre-line", color: "#222", fontSize: 15 }}
            >
              {privacyText}
            </DialogContentText>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowPolicy(false)} autoFocus>
            {t("footer.close")}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
