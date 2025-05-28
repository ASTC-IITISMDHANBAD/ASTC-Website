
import React from 'react';


const getBodyMotionStyle = (
  index: number, 
  isPlanet: boolean
) => {
  const areaWidth = 160; 
  const areaHeight = 160; 

  let size: number,
      duration: number,
      baseOrbitRadius: number,
      orbitRadiusVariance: number,
      colorClass: string;

  if (isPlanet) {
    size = 18 + Math.random() * 4; 
    duration = Math.random() * 5 + 15; 
    baseOrbitRadius = 5;
    orbitRadiusVariance = 5;
    colorClass = 'bg-gradient-to-br from-blue-500 to-purple-600 border border-blue-300/70 shadow-lg';
  } else { // Suns
    size = 12 + Math.random() * 6; 
    duration = Math.random() * 6 + 7;
    baseOrbitRadius = 40;
    orbitRadiusVariance = 30;
    
    const sunColors = ['bg-yellow-400 shadow-sun', 'bg-orange-500 shadow-sun', 'bg-red-500 shadow-sun'];
    colorClass = sunColors[index -1] || sunColors[0];
  }

  const delay = Math.random() * -duration;
  const orbitRadius = baseOrbitRadius + Math.random() * orbitRadiusVariance;
  
  
  const controlPoint1X = (Math.random() - 0.5) * areaWidth * 0.3; 
  const controlPoint1Y = (Math.random() - 0.5) * areaHeight * 0.3;
  const controlPoint2X = (Math.random() - 0.5) * areaWidth * 0.4;
  const controlPoint2Y = (Math.random() - 0.5) * areaHeight * 0.4;

  const a = orbitRadius * (1 + Math.random() * 0.2 - 0.1);
  const b = orbitRadius * (1 + Math.random() * 0.2 - 0.1);
  const angleOffset = Math.random() * 360;
  const rotationDirection = Math.random() > 0.5 ? 1 : -1;


  return {
    width: `${size}px`,
    height: `${size}px`,
    animationName: `body-motion-${index}`, 
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`,
    animationTimingFunction: 'cubic-bezier(0.42, 0, 0.58, 1)',
    animationIterationCount: 'infinite',
    animationDirection: 'alternate',
    className: `absolute top-1/2 left-1/2 rounded-full ${colorClass}`,
  
    '--a': `${a}px`,
    '--b': `${b}px`,
    '--angle-offset': `${angleOffset}deg`,
    '--rotation-direction': `${rotationDirection}`,
    '--cp1x': `${controlPoint1X}px`,
    '--cp1y': `${controlPoint1Y}px`,
    '--cp2x': `${controlPoint2X}px`,
    '--cp2y': `${controlPoint2Y}px`,
  };
};


const SpaceLoader: React.FC = () => {
  const bodies = [
    { type: 'planet', id: 0 },
    { type: 'sun', id: 1 },
    { type: 'sun', id: 2 },
    { type: 'sun', id: 3 },
  ];

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-space-dark text-space-light select-none overflow-hidden">
      {/* Animation Area Container */}
      <div className="relative w-56 h-56 md:w-64 md:h-64 flex items-center justify-center mb-12">
        {/* Render planet and 3 suns */}
        {bodies.map((body) => {
          const styleProps = getBodyMotionStyle(body.id, body.type === 'planet');
          return (
            <div
              key={body.id}
              className={styleProps.className}
              style={{
                width: styleProps.width,
                height: styleProps.height,
                animationName: styleProps.animationName,
                animationDuration: styleProps.animationDuration,
                animationDelay: styleProps.animationDelay,
                animationTimingFunction: styleProps.animationTimingFunction,
                animationIterationCount: styleProps.animationIterationCount,
                animationDirection: styleProps.animationDirection,
          
                '--a': styleProps['--a'],
                '--b': styleProps['--b'],
                '--angle-offset': styleProps['--angle-offset'],
                '--rotation-direction': styleProps['--rotation-direction'],
                '--cp1x': styleProps['--cp1x'],
                '--cp1y': styleProps['--cp1y'],
                '--cp2x': styleProps['--cp2x'],
                '--cp2y': styleProps['--cp2y'],
              } as React.CSSProperties } 
            />
          );
        })}
      </div>

      <p className="text-xl md:text-2xl font-display animate-pulse text-white">
        Cosmic Symphony Initializing...
      </p>
      <p className="mt-2 text-sm text-gray-400">
        Celestial mechanics at play.
      </p>

      {/* Inject dynamic keyframes using a style tag */}
      <style>
        {`
          ${bodies.map((body) => `
            @keyframes body-motion-${body.id} {
              0% {
                transform: translate(calc(-50% + var(--cp1x)), calc(-50% + var(--cp1y))) 
                           rotate(var(--angle-offset)) 
                           translateX(var(--a)) 
                           translateY(0) 
                           rotate(calc(-1 * var(--angle-offset)));
                opacity: 0.7;
              }
              25% {
                transform: translate(calc(-50% + var(--cp2x) * 0.5), calc(-50% + var(--cp1y) * 0.8)) 
                           rotate(calc(var(--angle-offset) + calc(90deg * var(--rotation-direction)))) 
                           translateX(calc(var(--a) * 0.8)) 
                           translateY(calc(var(--b) * 0.2 * var(--rotation-direction))) 
                           rotate(calc(-1 * var(--angle-offset) - calc(90deg * var(--rotation-direction))));
                opacity: 0.9;
              }
              50% {
                transform: translate(calc(-50% + var(--cp2x)), calc(-50% + var(--cp2y))) 
                           rotate(calc(var(--angle-offset) + calc(180deg * var(--rotation-direction)))) 
                           translateX(var(--a)) 
                           translateY(calc(var(--b) * 0.4 * var(--rotation-direction))) 
                           rotate(calc(-1 * var(--angle-offset) - calc(180deg * var(--rotation-direction))));
                opacity: 1;
              }
              75% {
                transform: translate(calc(-50% + var(--cp1x) * 0.5), calc(-50% + var(--cp2y) * 0.8)) 
                           rotate(calc(var(--angle-offset) + calc(270deg * var(--rotation-direction)))) 
                           translateX(calc(var(--a) * 0.9)) 
                           translateY(calc(var(--b) * 0.1 * var(--rotation-direction))) 
                           rotate(calc(-1 * var(--angle-offset) - calc(270deg * var(--rotation-direction))));
                opacity: 0.9;
              }
              100% {
                transform: translate(calc(-50% + var(--cp1x)), calc(-50% + var(--cp1y))) /* Return to start for 'alternate' */
                           rotate(calc(var(--angle-offset) + calc(360deg * var(--rotation-direction)))) 
                           translateX(var(--a)) 
                           translateY(0) 
                           rotate(calc(-1 * var(--angle-offset) - calc(360deg * var(--rotation-direction))));
                opacity: 0.7;
              }
            }
          `).join('\n')}
        `}
      </style>
    </div>
  );
};

export default SpaceLoader;