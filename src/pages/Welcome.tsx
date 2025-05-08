import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';

const Welcome: React.FC = () => {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate('/quiz');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="quiz-container p-8 max-w-2xl bg-white/80 backdrop-blur-sm">
        <Header 
          title="Qual tipo de peregrino você é?" 
          subtitle="Responda 5 perguntas rápidas e descubra seu perfil de aventureiro"
        />
        
        <div className="mb-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mb-8">
            <div className="peregrino-card peregrino-raiz">
              <span className="emoji">🌲</span>
              <span className="label">Raiz</span>
            </div>
            <div className="peregrino-card peregrino-urbano">
              <span className="emoji">🏙️</span>
              <span className="label">Urbano</span>
            </div>
            <div className="peregrino-card peregrino-nomade">
              <span className="emoji">🎒</span>
              <span className="label">Nômade</span>
            </div>
            <div className="peregrino-card peregrino-contemplativo">
              <span className="emoji">🍃</span>
              <span className="label">Contemplativo</span>
            </div>
          </div>
          
          <p className="text-center mb-8">
            Ao final, você receberá um perfil personalizado com recomendações de produtos para tornar suas aventuras ainda mais especiais!
          </p>
        </div>
        
        <div className="flex justify-center">
          <Button 
            onClick={startQuiz} 
            className="bg-green-800 hover:bg-green-700 text-white px-8 py-2 rounded-full font-medium text-lg"
          >
            Começar o teste
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;