import { MapPin, Users, Award, ShieldCheck, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation("about");

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-20 space-y-12">
        {/* Hero Intro */}
        <div className="bg-blue-600 text-white rounded-2xl p-12 text-center shadow-lg">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">{t("hero.title")}</h1>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed">
            {t("hero.text")}
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-16">
          {/* Who We Are */}
            <section className="bg-white rounded-2xl p-10 shadow-md">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <MapPin className="w-12 h-12 text-blue-600" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">{t("whoWeAre.title")}</h2>
                  <p className="text-gray-700 leading-relaxed">
                    {t("whoWeAre.text")}
                  </p>
                </div>
              </div>
            </section>

          {/* Mission & Vision */}
          <section className="bg-white rounded-2xl p-10 shadow-md">
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <Zap className="w-12 h-12 text-blue-600" />
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{t("missionVision.title")}</h2>
                <dl className="space-y-6">
                  <div>
                    <dt className="text-lg font-semibold text-gray-800">{t("missionVision.mission.title")}</dt>
                    <dd className="text-gray-700 leading-relaxed">
                      {t("missionVision.mission.text")}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-lg font-semibold text-gray-800">{t("missionVision.vision.title")}</dt>
                    <dd className="text-gray-700 leading-relaxed">
                      {t("missionVision.vision.text")}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="bg-white rounded-2xl p-10 shadow-md">
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <ShieldCheck className="w-12 h-12 text-blue-600" />
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">{t("values.title")}</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  { (t("values.items", { returnObjects: true }) as any[]).map(item => {
                      const Icon = { innovation: Award, integrity: ShieldCheck, customer: Users, excellence: Zap }[item.icon] || Award;
                      return (
                        <li key={item.icon} className="flex items-start space-x-3">
                          <Icon className="w-6 h-6 text-blue-600 mt-1" />
                          <span><strong>{item.title}:</strong> {item.text}</span>
                        </li>
                      );
                    }) }
                </ul>
              </div>
            </div>
          </section>

          {/* Team */}
          <section className="bg-white rounded-2xl p-10 shadow-md">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <Users className="w-12 h-12 text-blue-600" />
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{t("team.title")}</h2>
                <p className="text-gray-700 leading-relaxed">
                  {t("team.text")}
                </p>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="bg-white rounded-2xl p-10 shadow-md">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800">{t("why.title")}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {(t("why.cards", { returnObjects: true }) as any[]).map(card => {
                const iconMapLocal: Record<string, React.ElementType> = {
                  custom: Zap,
                  fast: Award,
                  support: Users,
                  expertise: ShieldCheck
                };
                const Icon = iconMapLocal[card.icon] || Zap;
                return (
                  <div key={card.icon} className="flex items-start space-x-4">
                    <Icon className="w-8 h-8 text-blue-600 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{card.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
