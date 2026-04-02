import React, { useState } from 'react';
import { Phone, Mail, Send, CheckCircle } from 'lucide-react';

const EnSavoirPlusPage = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    societe: '',
    objet: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Utilisation de FormSubmit.co pour envoyer un email sans backend
      // IMPORTANT: lors du 1er envoi, un email d'activation sera envoyé à repreneurspme@gmail.com
      const response = await fetch("https://formsubmit.co/ajax/repreneurspme@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          // Utilisation du _subject pour personnaliser le titre de l'email reçu
          _subject: `Nouveau message: ${formData.objet}`,
          Nom: formData.nom,
          Email: formData.email,
          Téléphone: formData.telephone,
          Société: formData.societe,
          Objet: formData.objet,
          Message: formData.message
        })
      });

      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        // On réinitialise les infos
        setFormData({
          nom: '',
          email: '',
          telephone: '',
          societe: '',
          objet: '',
          message: ''
        });
      } else {
        setIsSubmitting(false);
        alert("Une erreur est survenue coté serveur. Veuillez réessayer.");
      }
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
      alert("Erreur de connexion. Vérifiez votre réseau.");
    }
  };

  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 tracking-tight">
            Contactez-nous
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row">
          
          {/* Left Column: Informations */}
          <div className="lg:w-2/5 md:w-full bg-slate-800 p-8 sm:p-12 text-white flex flex-col relative overflow-hidden">
            {/* Decors */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-700 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-900 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-6">Informations de contact</h3>
              <p className="text-slate-300 font-light mb-12 leading-relaxed">
                N'hésitez pas à nous contacter pour toute demande d'information ou pour convenir d'un échange en toute confidentialité.
              </p>

              <div className="space-y-8 mt-auto">
                <a href="tel:0603544252" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white/10 group-hover:bg-emerald-500/20 group-hover:bg-emerald-400/20 rounded-full flex items-center justify-center transition-colors">
                    <Phone className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-medium tracking-wide uppercase mb-1">Téléphone</p>
                    <p className="text-lg font-medium group-hover:text-emerald-400 transition-colors">06 03 54 42 52</p>
                  </div>
                </a>

                <a href="mailto:repreneurspme@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white/10 group-hover:bg-emerald-500/20 group-hover:bg-emerald-400/20 rounded-full flex items-center justify-center transition-colors">
                    <Mail className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-medium tracking-wide uppercase mb-1">Email</p>
                    <p className="text-lg font-medium group-hover:text-emerald-400 transition-colors break-all">repreneurspme@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Formulaire */}
          <div className="lg:w-3/5 md:w-full p-8 sm:p-12">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in-up py-10">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Message envoyé !</h3>
                <p className="text-slate-500 font-light max-w-sm mb-6">
                  Nous avons bien reçu votre message et nous y répondrons dans les plus brefs délais.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-full transition-colors"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 border-b border-slate-100 pb-4">Envoyez-nous un message</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="nom" className="text-sm font-medium text-slate-700 block">Nom</label>
                    <input 
                      type="text" 
                      id="nom" 
                      name="nom" 
                      required
                      value={formData.nom}
                      onChange={handleChange}
                      placeholder="Jean Dupont"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-sm rounded-lg block"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700 block">EMAIL</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jean.dupont@entreprise.com"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-sm rounded-lg block"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="telephone" className="text-sm font-medium text-slate-700 block">Téléphone</label>
                    <input 
                      type="tel" 
                      id="telephone" 
                      name="telephone" 
                      required
                      value={formData.telephone}
                      onChange={handleChange}
                      placeholder="06 00 00 00 00"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-sm rounded-lg block"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="societe" className="text-sm font-medium text-slate-700 block">Société</label>
                    <input 
                      type="text" 
                      id="societe" 
                      name="societe" 
                      required
                      value={formData.societe}
                      onChange={handleChange}
                      placeholder="Nom de votre entreprise"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-sm rounded-lg block"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="objet" className="text-sm font-medium text-slate-700 block">Objet</label>
                  <input 
                    type="text" 
                    id="objet" 
                    name="objet" 
                    required
                    value={formData.objet}
                    onChange={handleChange}
                    placeholder="Sujet de votre message"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-sm rounded-lg block"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700 block">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Rédigez votre message ici..."
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all resize-y text-sm block"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-4 bg-slate-800 hover:bg-slate-900 text-white font-medium rounded-xl transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  ) : (
                    <>
                      <span>Envoyer le message</span>
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnSavoirPlusPage;
