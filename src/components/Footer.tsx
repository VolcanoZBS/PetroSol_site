import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Facebook, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import { SiGoogle } from "react-icons/si";
import logo from '../assets/images/Logo.png'; // importă logo-ul

export default function Footer() {
  const [showPolicy, setShowPolicy] = React.useState(false);

  return (
    <>
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Bloc PetroSol */}
            <div>
              <div className="flex items-center mb-4">
                <img src={logo} alt="PetroSol Logo" className="h-8 w-auto mr-2" />
                <h3 className="text-xl font-bold">PetroSol</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Soluții IT complete pentru industria petrolieră și nu numai.
              </p>
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

            {/* Bloc Contact */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
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

            {/* Bloc Informații */}
            <div>
              <h3 className="text-xl font-bold mb-4">Informații</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/about"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Despre noi
                  </a>
                </li>
                <li>
                  <a
                    href="/solutions"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Soluțiile noastre
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    className="text-gray-300 hover:text-white transition-colors"
                    onClick={() => setShowPolicy(true)}
                  >
                    Politica de confidențialitate
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              &copy; {new Date().getFullYear()} PetroSol. Toate drepturile rezervate.
            </p>
          </div>
        </div>
      </footer>

      {/* Modal Politica de confidentialitate */}
      <Dialog
        open={showPolicy}
        onClose={() => setShowPolicy(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="md"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title">
          {"Prelucrarea datelor cu caracter personal - Nota de informare"}
        </DialogTitle>
        <DialogContent dividers>
          <DialogContentText
            id="alert-dialog-description"
            sx={{ whiteSpace: 'pre-line', color: '#222', fontSize: 15 }}
          >
{`In contextul:
- Prevederilor Regulamentului nr. 679/2016 privind protecţia persoanelor fizice in ceea ce priveste prelucrarea datelor cu caracter personal si privind libera circulatie a acestor date (in continuare, Regulamentul),
- Prelucrarii de catre Petrol Solutions a anumitor date cu caracter personal,

Detinatorul site-ului, Petrol Solutions S.R.L. cu sediul social in Bucuresti, str. Cpt. Alexandru Serbanescu nr. 85, sector 1, inregistrata la Registrului Comertului sub nr. J40/5688/2014, cod unic de identificare RO33158679, e-mail: office@petrosol.ro, Tel: +4 0723 888 850, este Operator de date conform Regulamentului.

Mai jos, va punem la dispozitie politica de confidentialitate privind atat site-ul cat si anumite servicii pe care le oferim prin intermediul acestuia.

Colectam datele d-voastra:
• Atunci cand va inregistrati pe site
• Atunci cand utilizati site-ul
• Prin intermediul cookies-urilor site-ului
• In situatia in care efectuati achizitii de pe site
• In situatia in care ne contactati folosind formularul de contact pus la dispozitie pe site

Astfel, pentru a va inregistra, minimul de informatii care ne sunt necesare in vederea crearii contului sunt numele complet, adresa de e-mail, numarul de telefon, parola.

Dupa ce v-ati inregistrat pe site-ul nostru, cu permisiunea d-voastra, va putem transmite e-mailuri al caror continut consideram ca v-ar putea interesa. Totodata, newsletter-ele transmise de noi pot fi personalizate in functie de interesul manifestat d-voastra pentru anumite produse si de regimul juridic, financiar-fiscal acestora. Cu toate acestea, d-voastra detineti controlul referitor la primirea de newslettere, asa incat puteti decide in orice moment sa va dezabonati de la acest tip de informari.

Nu in ultimul rand, daca optati sa va logati la site-ul nostru utilizand contul d-voastra de Facebook, va rugam sa retineti ca acordati aplicatiei Facebook permisiunea sa imparta cu noi datele d-voastra de utilizator Facebook, adica numele si prenumele d-voastra si adresa d-voastra de e-mail, informatii care vor fi utilizate de noi in vederea crearii contului d-voastra.

In cazul in care efectuati o comanda pe site-ul nostru, datele necesare onorarii acesteia sunt: nume, prenume, adresa e-mail, telefon de contact, adresa de facturare, adresa de livrare, modalitate de plata.

In vederea actualizarii datelor d-voastra, dupa inregistrarea in cont, puteti actualiza informatiile oferite prin accesarea sectiunii “Cont”.
In cazul in care doriti sa ne adresati un mesaj prin intermediul Formularului de contact pus la dispozitie pe site, sunt necesare informatii referitoare la numele si prenumele, d-voastra, la adresa de e-mail, la departamentul caruia ii adresati mesajul, precum si la mesajul pe care doriti sa ni-l trimiteti; in mod optional, strict la alegerea d-voastra, ne puteti oferi si numarul de telefon la care puteti fi contactat. Folosim datele colectate in acest mod pentru a avea mijloacele necesare comunicarii raspunsului solicitat de d-voastra.

Exista posibilitatea ca noi sa solicitam informatii suplimentare, cum ar fi, spre exemplu, cele de natura fiscala - daca suntem obligati de lege sa depunem declaratii fiscale sau alte tipuri de dpcumente in legatura cu produsele comandate de d-voastra.

Datele d-voastra vor fi folosite in scop de marketing doar daca vom avea consimtamantul d-voastra explicit in vederea comunicarii de informari cu acest tip de continut.

In concluzie, prelucram datele anterior mentionate:
- in scop contractual, in vederea onorarii comenzilor lansate de d-voastra,
- in vederea comunicarii de mesaje de tip newsletter, daca v-ati abonat la acest serviciu, inclusiv in vederea trimiterii de mesaje cu caracter informativ referitor la drepturile si obligatiile d-voastra ca urmare a unor modificari, actualizari, aparitiei unor noi prevederi legale privind regimul produselor comandate de d-voastra;
- in scop legal - atunci cand solicitam detalii suplimentare de natura financiar-fiscala,
- in scop de marketing direct, adica pentru a va tine la curent cu produsele si/sau serviciile noastre si doar daca daca optati in mod explicit pentru o astfel de comunicare. Chiar si in astfel de cazuri, va asiguram ca aveti o opțiune usor de folosit pentru a va retrage consimtamantul in orice moment, fie prin dezabonarea la serviciul de newsletter, fie contactandu-ne prin e-mail la adresa dpo@petrosol.ro.

Vom transmite datele d-voastra doar si in masura in care este necesar:
• Catre furnizorii serviciilor de curierat, in vederea livrarii comenzilor d-voastra
• Catre furnizorii si suportul sistemelor tehnologiei informatiei, inclusiv arhivarea e-mailurilor, furnizorii de telecomunicatii, serviciile de back-up si recuperare in caz de catastrofe si serviciile de securitate cibernetica;
• Catre companiile implicate in functionarea site-ului;
• Catre autoritati, institutii, avocati si alti consultanti externi a caror activitate necesita cunoasterea acestor informatii sau in cazul in care legea ne impune;
• Catre persoane care dovedesc faptul ca actioneaza legal in numele d-voastra;
• Pentru a raspunde oricaror reclamatii, pentru a ne proteja drepturile sau drepturile unui tert, pentru a proteja siguranta oricarei persoane sau pentru a preveni orice activitate ilegala;
• Pentru a proteja drepturile, proprietatea sau siguranta site-ului, angajatilor societatii, clientilor, furnizorilor sau altor persoane.

Subliniem faptul ca acest tip de comunicare a datelor este efectuata doar si atunci cand este strict necesar, in functie de situatie.

Nu in ultimul rand, va informam cu privire la faptul ca in cazul in care optati pentru plata online,  aplicatia prin care efectuati plata apartine unui tert prin intermediul caruia se realizeaza tranzactia, iar Petrol Solutions nu are nicio implicare in aceste operatiuni.

Durata prelucrarii: in stabilirea duratei prelucrarii, luam in calcul atat durata executarii comenzii lansate de d-voastra, pana la expirarea obligatiilor derivate din aceasta, precum si termenele de legislatia specifica in domeniul aparatelor de marcat electronice fiscale (in cazul in care acestea fac obiectul comenzii d-voastra) si nu in ultimul rand, termenele impuse de legislatia financiar-contabila in ceea ce priveste documentele contabile.

Securitate. Petrol Solutions se angajeaza sa protejeze datele d-voastra personale impotriva pierderii, utilizarii incorecte, divulgarii neautorizata, modificarii, indisponibilitatii, accesului neautorizat si distrugerii si ia toate masurile de precautie rezonabile pentru a proteja confidentialitatea acestor date, inclusiv prin utilizarea unor masuri organizatorice și tehnice adecvate.

In timpul furnizarii catre d-voastra sau de catre d-voastra a datelor tale personale, datele personale pot fi transferate pe internet. Desi depunem toate eforturile pentru a proteja datele personale pe care ni le furnizati, transmiterea de informatii intre d-voastra si noi, pe internet, nu este complet sigura (e posibil ca terminalul de pe care scrieti sa fie monitorizat de terti, spre exemplu, fara ca noi sa putem face nimic in aceasta privinta). Prin urmare, nu putem garanta securitatea informatiilor d-voastra personale transmise prin intermediul internetului. Intelegeti, deci, ca orice astfel de transmisie este pe propriul d-voastra risc. Odata ce primim datele personale, vom folosi proceduri stricte si caracteristici de securitate pentru a preveni accesul neautorizat la acestea.

Cookie-uri.

Site-ul petrosol.ro utilizeaza tehnologia de tip cookie pentru a va oferi un o experienta web mai buna si totodata, personalizata. Datele stocate de fisierele de tip cookie utilizate pe site  nu arata detalii personale care sa fie de natura a conduce la o identitate individuala.

Un fisier de tip cookie reprezinta un mic fisier text care este stocat si/sau citit de browserul d-voastra web pe hard disk-ul dispozitivului dvs. final (de exemplu, computer, laptop sau smartphone) - in functie de site-urile web pe care le vizitati. Totodata, fisierele de tip cookie contribuie la crearea unei interactiuni mai sigura si mai rapida, deoarece aceste fisiere pot retine preferintele d-voastra (de exemplu, autentificare, limba), trimitand informatiile pe care le contin inapoi la site-ul web originar (first-party cookie) sau catre alt site web caruia ii apartin (third-party cookie), atunci cand vizitati din nou site-ul web respectiv utilizand acelasi dispozitiv final.

Va puteti retrage consimtamantul privind fisierele de tip cookie in orice moment. In acest scop, puteti sa blocati sau eliminati fisierele cookie fie prin intermediul setarilor browserului d-voastra web sau prin utilizarea unor software-uri puse la dispozitie de terti, sau urmand instructiunile specifice pentru categoriile de cookie din sectiunile urmatoare. In orice situatie, pot aparea probleme legate de utilizarea anumitor parti ale site-ului web daca dezactivati fisierele de tip cookie.

In cazul in care doriti sa eliminati fisierele de tip cookie stocate pe dispozitivele d-voastra si sa configurati browserul web astfel incat sa refuze fisiere de tip cookie, puteti sa utilizati setarile privind preferințele din browser-ul dvs. web. De obicei, puteți găsi setarile de navigare referitoare la fisiere de tip cookie in meniurile „Optiuni”, „Instrumente” sau „Preferinte” din browserul web pe care il utilizati pentru a accesa site-ul nostru. In functie de browserele web existente, pot fi utilizate mijloace diverse pentru a dezactiva fisierele de tip cookie. Pentru a obtine mai multe informatii, va rugăm sa vizitati website-ul browserelor dvs.:

• Setari cookie in Internet Explorer - Internet Explorer;
• Setari cookie in Firefox - Firefox;
• Setari cookie in Chrome - Chrome;
• Setari cookie in Safari - Safari;
• Setari cookie in Edge - Edge;
• Setari cookie in Opera - Opera.

Pentru a afla mai multe despre fișierele de tip cookie, va rugam sa vizitati www.allaboutcookies.org sau www.youronlinechoices.eu.

Fisierele de tip cookie utilizate pe site-ul datecs.ro:

• Fisiere de tip cookie absolut/strict necesare, sunt fisiere esentiale in functionarea site-ului, fara acestea nefiind posibile functionarea site-ului si livrarea produselor/serviciilor noastre.
• Fisiere de tip cookie privind functionalitatea sunt utilizate pentru a va recunoaște atunci cand reveniți pe site-ul nostru si ne permit sa va oferim functii îmbunatatite si intr-o anumita masura, chiar personalizate, cum ar fi reamintirea preferintelor dvs.  Aceste fisiere de tip cookie colecteaza informatii anonime si nu pot urmari navigarile dvs. pe alte site-uri web.
• Fisiere de tip cookie analitice si privind performanța ne permit sa colectam informatii despre modul in care este utilizat site-ul (spre exemplu, paginile pe care un utilizator le deschide cel mai des si daca utilizatorul primeste mesaje de eroare de la anumite pagini). Aceste informatii ne ajuta sa imbunatatim modul in care functioneaza site-ul nostru.
Site-ul nostru utilizeaza Google Analytics, un serviciu pentru analiza web, furnizat de Google. Google Analytics utilizeaza fisiere de tip cookie pentru a ajuta un anumit site sa analizeze modul in care utilizati respectivul site. Informatiile generate de fisierele de tip cookie cu privire la utilizarea de catre d-voastra a site-ului vor fi transmise si stocate de Google pe servere care pot fi localizate în UE, SEE si/sau Statele Unite. Google va utiliza aceste informatii in scopul evaluarii utilizarii de catre d-voastra a site-ului, elaborand rapoarte cu privire la activitatea site-ului pentru operatorii site-ului si furnizand alte servicii referitoare la activitatea site-ului si la utilizarea internetului. De asemenea, Google poate transfera aceste informatii catre terti in cazul in care are aceasta obligatie conform legii sau in cazul in care acesti terti prelucreaza informatiile in numele Google. Google nu va asocia adresa dvs. IP cu alte date detinute de Google.
Puteti renunta la Google Analytics fara a afecta modul in care vizitati site-ul nostru web. Informatii detaliate cu privire la Google Analytics si la protectia datelor cu caracter personal (inclusiv modul in care puteti controla informatiile trimise catre Google) pot fi gasite la: https://policies.google.com/privacy/partners.
• Fisiere de tip cookie privind retelele sociale va permit sa impartasiti pe site activitatea dvs. pe retele sociale, cum ar fi Facebook și Twitter. Aceste fisiere de tip cookie nu sunt controlate de catre noi. De exemplu, atunci cand distribuiti un articol utilizând un buton de distribuire in retelele de socializare (de exemplu, Facebook sau Twitter) disponibil pe un site, platforma retelei de socializare asociata butonului respectiv va inregistra acest lucru. Pe unele site-uri poate, de asemenea, sa existe continut integrat („embedded”), de exemplu continut video al unor terte parti precum YouTube, si, in acest caz, acesti terti pot sa-si plaseze la randul lor propriile fisiere de tip cookie.
• Alte tipuri de fisiere de tip cookie care pot fi utilizate ulterior. Va vom informa prin politicile noastre actualizate daca sunt utilizate orice alte tipuri de cookies.

Durata de viața a cookie-urilor poate varia semnificativ, depinzand de scopul pentru care este plasat. Exista urmatoarele categorii de cookie-uri care determină si durata de viața a acestora:
• Cookie-uri de sesiune - este un cookie care este sters automat atunci cand utilizatorul inchide browserul.
• Cookie-uri persistente sau fixe - sunt cookie-uri care raman stocate in terminalul utilizatorului pana cand atinge o anumita data de expirare (care poate fi de cateva minute, zile sau cativa ani in viitor) sau pana la stegerea acestuia de catre utilizator, in orice moment, prin intermediul setarilor browserului.

Drepturile persoanei vizate (persoana ale carei date sunt prelucrate). Conform Regulamentului de protectie a datelor cu caracter personal nr. 679/2016, persoanele fizice ale caror date sunt prelucrate beneficiaza de urmatoarele drepturi: de informare, de acces, de rectificare, de stergere, de portabilitate a datelor, de opozitie, de restrictionare a prelucrarii, de a nu face obiectul unei decizii baza exclusive pe prelucrarea automata, de a depune o plangere la Autoritatea Nationala de Supraveghere a Datelor cu Caracter Personal.

Pentru exercitarea drepturilor d-voastra va rugam sa adresati solicitarea d-voastra prin comunicare la adresa de e-mail dpo@petrosol.ro.
Vom face tot posibilul sa raspundem solicitarii d-voastra in termen de 30 de zile de la primirea acesteia, insa, precizam ca putem prelungi acest termen din motive specifice, inclusiv legate de complexitatea cererii d-voastra. In cazul in care perioada de raspuns va fi mai mare de 30 de zile vom reveni la d-voastra pentru a va informa cu privire la prelungirea termenul de raspuns.

Totodata, va informam cu privire la faptul ca ne rezervam dreptul de a modifica nota de informare in orice moment, in functie de modificarea practicilor noastre de confidentialitate, de cerintele legii, precum si in functie de orice alte evenimente de natura sa aiba consecinte asupra practicilor noastre actuale. Acest document este actual la data crearii contului d-voastra, la data lansarii comenzii, la data abonarii la serviciul de newsletter, iar datele d-voastra personale vor fi tratate intr-o maniera compatibila cu nota de informare/notificarea de confidentialitate in baza carora au fost colectate, cu exceptia cazului in care avem consimtamantul d-voastra sa le tratam diferit.
`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowPolicy(false)} autoFocus>
            Închide
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
