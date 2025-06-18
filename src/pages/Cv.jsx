import React, { useState, useEffect, useRef } from "react";
import { Download, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2, ease: "easeIn" } },
};

const translations = {
  en: {
    profile:
      "Quality-focused IT specialist with 6+ years of experience working with end-users and infrastructure support teams to deliver systems and application support. Committed to providing premiere technical support to executive-level customers, clients and vendors. CRISC certified.",
    employmentTitle1: "IT Specialist, Callubra, Seattle",
    employmentDate1: "July 2016 — January 2022",
    employmentBullets1: [
      "Provided on-site technical support for IT and AV infrastructure at various client locations.",
      "Delivered all aspects of technical support including implementation of audio/visual and IT infrastructure at the facility.",
      "Worked to troubleshoot technical issues for customers and internal clients.",
      "Created, updated and adhered to procedural documents.",
      "Provided technical support for servers and back-end network systems.",
      "Worked cross functionally with other team members to deliver exceptional work and meet goals on projects in excess of 2 million dollars.",
    ],
    employmentTitle2: "IT Support Specialist, Seattle Central College, Seattle",
    employmentDate2: "October 2013 — June 2016",
    employmentBullets2: [
      "Researched and recommended hardware and software purchases to support the college's IT goals.",
      "Collaborated with the Associate Dean and other team members to provide exceptional IT support.",
      "Maintained inventory of computers assigned to staff and faculty.",
      "Worked independently to provide IT support for 10+ college software systems.",
    ],
    educationTitle: "Bachelor of Computer Science, Seattle University, Seattle",
    educationDate: "September 2009 — May 2013",
    skills: [
      "Computer Networking",
      "IT-language JavaScript",
      "IT Troubleshooting and Problem Solving",
      "IT-technology Angular",
      "Software Installation",
      "Customer Support",
    ],
    sections: {
      profile: "Profile",
      employment: "Employment History",
      education: "Education",
      skills: "Skills",
    },
    webSpecialist: "Web Specialist",
    location: "Lagos, Nigeria",
    download: "Download PDF",
  },
  es: {
    profile:
      "Especialista en TI enfocado en la calidad con más de 6 años de experiencia trabajando con usuarios finales y equipos de soporte de infraestructura para brindar soporte de sistemas y aplicaciones. Comprometido a proporcionar soporte técnico de primer nivel a clientes, socios y proveedores de nivel ejecutivo. Certificado CRISC.",
    employmentTitle1: "Especialista en TI, Callubra, Seattle",
    employmentDate1: "Julio 2016 — Enero 2022",
    employmentBullets1: [
      "Brindó soporte técnico in situ para infraestructura de TI y AV en varias ubicaciones de clientes.",
      "Entregó todos los aspectos del soporte técnico, incluida la implementación de infraestructura de audio/visual y TI en las instalaciones.",
      "Trabajó en la resolución de problemas técnicos para clientes externos e internos.",
      "Creó, actualizó y cumplió con documentos de procedimientos.",
      "Proporcionó soporte técnico para servidores y sistemas de red backend.",
      "Colaboró con otros miembros del equipo para entregar un trabajo excepcional y cumplir objetivos en proyectos de más de 2 millones de dólares.",
    ],
    employmentTitle2: "Especialista en Soporte de TI, Seattle Central College, Seattle",
    employmentDate2: "Octubre 2013 — Junio 2016",
    employmentBullets2: [
      "Investigó y recomendó compras de hardware y software para apoyar los objetivos de TI de la universidad.",
      "Colaboró con el Decano Asociado y otros miembros del equipo para brindar un soporte de TI excepcional.",
      "Mantuvo el inventario de computadoras asignadas al personal y la facultad.",
      "Trabajó de forma independiente para proporcionar soporte de TI para 10+ sistemas de software de la universidad.",
    ],
    educationTitle: "Licenciatura en Ciencias de la Computación, Universidad de Seattle",
    educationDate: "Septiembre 2009 — Mayo 2013",
    skills: [
      "Redes Informáticas",
      "Lenguaje de TI JavaScript",
      "Resolución de Problemas y Solución de Errores de TI",
      "Tecnología de TI Angular",
      "Instalación de Software",
      "Soporte al Cliente",
    ],
    sections: {
      profile: "Perfil",
      employment: "Historial de Empleo",
      education: "Educación",
      skills: "Habilidades",
    },
    webSpecialist: "Especialista Web",
    location: "Lagos, Nigeria",
    download: "Descargar PDF",
  },
  fr: {
    profile:
      "Spécialiste en informatique axé sur la qualité avec plus de 6 ans d'expérience en collaboration avec des utilisateurs finaux et des équipes de support d'infrastructure pour fournir un support pour les systèmes et applications. Engagé à offrir un support technique de premier ordre aux clients, partenaires et fournisseurs de niveau exécutif. Certifié CRISC.",
    employmentTitle1: "Spécialiste en Informatique, Callubra, Seattle",
    employmentDate1: "Juillet 2016 — Janvier 2022",
    employmentBullets1: [
      "Fournit un support technique sur site pour l'infrastructure informatique et audiovisuelle dans divers sites clients.",
      "Assuré tous les aspects du support technique, y compris la mise en œuvre de l'infrastructure audiovisuelle et informatique sur site.",
      "Travaillé à la résolution des problèmes techniques pour les clients externes et internes.",
      "Créé, mis à jour et respecté les documents de procédures.",
      "Fourni un support technique pour les serveurs et les systèmes de réseau backend.",
      "Collaboré avec d'autres membres de l'équipe afin de fournir un travail exceptionnel et atteindre les objectifs sur des projets dépassant 2 millions de dollars.",
    ],
    employmentTitle2: "Spécialiste en Support Informatique, Seattle Central College, Seattle",
    employmentDate2: "Octobre 2013 — Juin 2016",
    employmentBullets2: [
      "Recherché et recommandé des achats de matériel et de logiciels pour soutenir les objectifs informatiques de l’université.",
      "Collaboré avec le doyen associé et d'autres membres de l'équipe pour fournir un support informatique exceptionnel.",
      "Maintenu l'inventaire des ordinateurs attribués au personnel et aux professeurs.",
      "Travaillé de manière indépendante pour fournir un support informatique pour plus de 10 systèmes logiciels de l’université.",
    ],
    educationTitle: "Licence en Informatique, Université de Seattle, Seattle",
    educationDate: "Septembre 2009 — Mai 2013",
    skills: [
      "Réseaux Informatiques",
      "Langage informatique JavaScript",
      "Dépannage et Résolution de Problèmes Informatiques",
      "Technologie informatique Angular",
      "Installation de Logiciels",
      "Support Client",
    ],
    sections: {
      profile: "Profil",
      employment: "Historique d'Emploi",
      education: "Éducation",
      skills: "Compétences",
    },
    webSpecialist: "Spécialiste Web",
    location: "Lagos, Nigeria",
    download: "Télécharger le PDF",
  },
};

const CV = () => {
  const [lang, setLang] = useState("en");
  const [showFloatBtn, setShowFloatBtn] = useState(false);
  const [showLangModal, setShowLangModal] = useState(false);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const globeRef = useRef(null);
  const cvRef = useRef(null);

  // Show floating button after scrolling past letterhead (approx 200px)
  useEffect(() => {
    const onScroll = () => {
      setShowFloatBtn(window.scrollY > 200);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Handle Globe icon click to show language modal
  const handleGlobeClick = (e) => {
    const rect = globeRef.current.getBoundingClientRect();
    setModalPosition({
      x: rect.left,
      y: rect.bottom + window.scrollY + 10, // Position below the globe icon
    });
    setShowLangModal(true);
  };

  // Handle language selection
  const handleLangSelect = (selectedLang) => {
    setLang(selectedLang);
    setShowLangModal(false); // Close modal after selection
  };

  // Handle PDF download
  const handleDownload = () => {
    const element = cvRef.current;
    if (!element || typeof window.html2pdf === "undefined") {
      console.error("html2pdf not found or CV element missing");
      return;
    }
  
    const opt = {
      margin: 0.5,
      filename: "Adinoyi-CV.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };
  
    window.html2pdf().set(opt).from(element).save();
  };
  
  const t = translations[lang];

  return (
    <>
      {/* Language Selection Modal */}
      <AnimatePresence>
        {showLangModal && (
          <motion.div
            className="fixed bg-white rounded-lg shadow-md p-2 z-[1100]"
            style={{ top: modalPosition.y, left: modalPosition.x }}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {["en", "es", "fr"].map((langCode) => (
              <button
                key={langCode}
                onClick={() => handleLangSelect(langCode)}
                className="block w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-100 rounded transition"
              >
                {langCode === "en" ? "English" : langCode === "es" ? "Español" : "Français"}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div
        ref={cvRef}
        className="min-h-screen bg-[#f4f5f7] py-12 px-6 sm:px-10 lg:px-24 font-sans text-[#1f1f1f] print:bg-white print:text-black print:m-2"
      >
        {/* Language toggle & header controls */}
        <div className="flex justify-end items-center mb-4 space-x-4 print:hidden">
          <button
            ref={globeRef}
            onClick={handleGlobeClick}
            aria-label="Select Language"
            className="flex items-center gap-2 text-gray-700 hover:text-black transition font-medium"
          >
            <Globe className="w-5 h-5" />
            Language
          </button>
        </div>

        {/* Letterhead Header */}
        <div className="bg-black text-white rounded-t-2xl p-6 sm:p-10 text-center print:bg-white print:text-black print:rounded-none">
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-none tracking-tight">
            Big <br className="sm:hidden" /> Moerell
          </h1>
          <p className="text-sm tracking-widest mt-2 uppercase text-gray-300 print:text-black">
            {t.webSpecialist}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 text-sm text-gray-400 print:text-black">
            <a href="mailto:bigmoerell@gmail.com">bigmoerell@gmail.com</a>
            <span className="hidden sm:inline">|</span>
            <span>{t.location}</span>
            <span className="hidden sm:inline">|</span>
            <span>+234 809 8986 274</span>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-b-2xl p-6 sm:p-10 mt-1 space-y-12 text-[15px] leading-relaxed print:rounded-none">
          {/* Section Template */}
          {[
            {
              title: t.sections.profile,
              content: <p>{t.profile}</p>,
            },
            {
              title: t.sections.employment,
              content: (
                <>
                  <div className="mb-6">
                    <h3 className="font-semibold">{t.employmentTitle1}</h3>
                    <p className="text-sm text-gray-500">{t.employmentDate1}</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      {t.employmentBullets1.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold">{t.employmentTitle2}</h3>
                    <p className="text-sm text-gray-500">{t.employmentDate2}</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      {t.employmentBullets2.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </>
              ),
            },
            {
              title: t.sections.education,
              content: (
                <div>
                  <h3 className="font-semibold">{t.educationTitle}</h3>
                  <p className="text-sm text-gray-500">{t.educationDate}</p>
                </div>
              ),
            },
            {
              title: t.sections.skills,
              content: (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  {t.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center justify-between border-b border-dotted pb-1 text-gray-700"
                    >
                      <span>{skill}</span>
                      <span className="text-black font-bold">{">>"}</span>

                    </div>
                  ))}
                </div>
              ),
            },
          ].map((section, i) => (
            <motion.section
              key={section.title}
              className="border-t border-gray-200 pt-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeInUp}
            >
              <h2 className="text-xl font-bold mb-4 tracking-wide">{section.title}</h2>
              {section.content}
            </motion.section>
          ))}
        </div>

        {/* Floating Download Button */}
        <AnimatePresence>
          {showFloatBtn && (
            <motion.button
              onClick={handleDownload}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="fixed bottom-8 right-8 z-[1100] bg-gradient-to-r from-black to-gray-800 text-white rounded-full px-5 py-3 flex items-center gap-2 shadow-lg hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black print:hidden"
              aria-label="Download CV PDF"
            >
              <Download className="w-5 h-5" />
              {t.download}
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default CV;