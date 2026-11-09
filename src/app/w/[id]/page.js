// src/app/w/[id]/page.js
'use client';

import { useState, useCallback, use } from 'react';
import { surpriseConfig } from '@/data/surpriseConfig';
import MagicBackground from '@/components/MagicBackground';
import MusicPlayer from '@/components/MusicPlayer';
import ProgressTracker from '@/components/ProgressTracker';
import EnvelopeUnwrap from '@/components/EnvelopeUnwrap';
import CandleBlow from '@/components/CandleBlow';
import MemorySlider from '@/components/MemorySlider';
import LoveLetter from '@/components/LoveLetter';
import VideoMessage from '@/components/VideoMessage';
import ReplayFooter from '@/components/ReplayFooter';

export default function SurprisePage({ params }) {
  const unwrappedParams = use(params);
  const id = unwrappedParams.id;

  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const { recipientName, senderName, music, steps } = surpriseConfig;
  const currentStep = steps[currentStepIndex];

  const currentMusic = music[currentStep?.id] || Object.values(music)[0];

  const handleNext = useCallback(() => {
    setCurrentStepIndex((prev) => Math.min(prev + 1, steps.length));
  }, [steps.length]);

  const handleReplay = useCallback(() => {
    setCurrentStepIndex(0);
  }, []);

  const renderStepContent = () => {
    if (currentStepIndex >= steps.length) {
      return (
        <ReplayFooter
          senderName={senderName}
          recipientName={recipientName}
          onReplay={handleReplay}
          surpriseUrl={typeof window !== 'undefined' ? window.location.href : ''}
        />
      );
    }

    const commonProps = {
      recipientName,
      senderName,
      config: currentStep?.config || {},
      onNext: handleNext,
    };

    switch (currentStep?.type) {
      case 'envelope':
      case 'unwrap':
        return <EnvelopeUnwrap {...commonProps} />;
      case 'wishpop':
      case 'candle':
        return <CandleBlow {...commonProps} />;
      case 'memoryslider':
        return <MemorySlider {...commonProps} />;
      case 'loveletter':
        return <LoveLetter {...commonProps} />;
      case 'video':
        return <VideoMessage {...commonProps} />;
      default:
        return <EnvelopeUnwrap {...commonProps} />;
    }
  };

  return (
    <MagicBackground>
      {currentMusic && (
        <MusicPlayer
          audioUrl={currentMusic.audioUrl}
          trackName={currentMusic.title}
          artistName={`For ${recipientName} • By ${senderName}`}
          coverImage={currentMusic.cover}
        />
      )}

      <ProgressTracker currentStep={currentStepIndex} totalSteps={steps.length} />

      <div className="w-full max-w-xl mx-auto min-h-screen flex items-center justify-center p-4 relative z-10">
        {renderStepContent()}
      </div>
    </MagicBackground>
  );
}