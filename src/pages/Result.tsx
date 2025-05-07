
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useQuiz } from '@/context/QuizContext';
import { peregrinoProfiles } from '@/data/quizData';
import ProductCard from '@/components/ProductCard';
import { useToast } from '@/hooks/use-toast';

const Result: React.FC = () => {
  const navigate = useNavigate();
  const { getResult, isCompleted } = useQuiz();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    // If quiz is not completed, redirect to the start
    if (!isCompleted) {
      navigate('/');
    }
  }, [isCompleted, navigate]);
  
  if (!isCompleted) return null;
  
  const peregrinoType = getResult();
  const profile = peregrinoProfiles[peregrinoType];
  
  const handleSubmitEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call for email submission
    setTimeout(() => {
      toast({
        title: "Email cadastrado com sucesso!",
        description: "Você receberá novidades da Peregrinos em breve.",
      });
      setIsSubmitting(false);
      setEmail('');
    }, 1000);
  };
  
  const handleRestartQuiz = () => {
    navigate('/', { replace: true });
    window.location.reload();
  };
  
  const handleGoToShop = () => {
    window.open('https://peregrinos.com/collections/all', '_blank');
  };
  
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div 
          className="quiz-container mb-8"
          style={{ borderTopColor: profile.color, borderTopWidth: '6px' }}
        >
          <div className="p-6 md:p-8">
            <div className="text-center mb-8">
              <span className="inline-block text-4xl mb-3">
                {peregrinoType === 'raiz' && '🌲'}
                {peregrinoType === 'urbano' && '🏙️'}
                {peregrinoType === 'nomade' && '🎒'}
                {peregrinoType === 'contemplativo' && '🍃'}
              </span>
              <h1 
                className="text-2xl md:text-3xl font-bold mb-2"
                style={{ color: profile.color }}
              >
                Você é {profile.title}!
              </h1>
              <p className="text-lg">{profile.description}</p>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Produtos recomendados para você:</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {profile.products.map((product, index) => (
                  <ProductCard
                    key={index}
                    name={product.name}
                    description={product.description}
                    imageUrl={product.imageUrl}
                    price={product.price}
                    url={product.url}
                  />
                ))}
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Button
                onClick={handleGoToShop}
                className="bg-peregrinos-accent hover:bg-peregrinos-accent/90 text-white px-6 py-2"
              >
                Ver mais produtos na loja
              </Button>
              <Button
                variant="outline"
                onClick={handleRestartQuiz}
                className="border-peregrinos-text/30 hover:bg-peregrinos-text/10"
              >
                Fazer o teste novamente
              </Button>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-medium mb-3">
            Receba dicas e novidades para {profile.title.toLowerCase()}s
          </h3>
          <form onSubmit={handleSubmitEmail} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu melhor e-mail"
              required
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-peregrinos-accent/50"
            />
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-peregrinos-text hover:bg-peregrinos-text/90 text-white"
            >
              {isSubmitting ? "Enviando..." : "Assinar"}
            </Button>
          </form>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            © 2025 Peregrinos | Todos os direitos reservados
          </p>
        </div>
      </div>
    </div>
  );
};

export default Result;
