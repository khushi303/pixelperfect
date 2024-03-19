// import React, { useState, useRef, useEffect } from 'react';

// function ParticleCanvas() {
//     const canvasRef = useRef(null);
//     const [particles, setParticles] = useState([]);

//     useEffect(() => {
//         const canvas = canvasRef.current;
//         const ctx = canvas.getContext('2d');
//         let animationFrameId;

//         // Set canvas dimensions
//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;

//         function createParticle(x, y) {
//             const particle = {
//                 x,
//                 y,
//                 radius: Math.random() * 5 + 1, // Random radius between 1 and 6
//                 color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`, // Random color
//                 velocity: {
//                     x: (Math.random() - 0.5) * 2, // Random horizontal velocity
//                     y: (Math.random() - 0.5) * 2 // Random vertical velocity
//                 },
//                 alpha: 1 // Initial opacity
//             };
//             setParticles(prevParticles => [...prevParticles, particle]);
//         }

//         function animate() {
//             animationFrameId = requestAnimationFrame(animate);
//             ctx.clearRect(0, 0, canvas.width, canvas.height);

//             // Update and draw particles
//             particles.forEach((particle, index) => {
//                 particle.x += particle.velocity.x;
//                 particle.y += particle.velocity.y;
//                 particle.alpha -= 0.01; // Reduce opacity

//                 // Draw particle
//                 ctx.beginPath();
//                 ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
//                 ctx.fillStyle = `rgba(${particle.color}, ${particle.alpha})`;
//                 ctx.fill();

//                 // Check if particle is out of bounds or faded out, if yes, remove it
//                 if (particle.x - particle.radius > canvas.width ||
//                     particle.x + particle.radius < 0 ||
//                     particle.y - particle.radius > canvas.height ||
//                     particle.y + particle.radius < 0 ||
//                     particle.alpha <= 0) {
//                     // Remove particle from array
//                     setParticles(prevParticles => prevParticles.filter((_, i) => i !== index));
//                 }
//             });
//         }

//         // Event listener for mousemove to create particles
//         const handleMouseMove = (event) => {
//             createParticle(event.clientX, event.clientY);
//         };

//         canvas.addEventListener('mousemove', handleMouseMove);

//         // Start animation
//         animate();

//         // Cleanup function
//         return () => {
//             cancelAnimationFrame(animationFrameId);
//             canvas.removeEventListener('mousemove', handleMouseMove);
//         };
//     }, [particles]);

//     return <canvas ref={canvasRef} />;
// }

// export default ParticleCanvas;

// import React, { useState, useRef, useEffect } from 'react';

// function ParticleCanvas() {
//     const canvasRef = useRef(null);
//     const [particles, setParticles] = useState([]);

//     useEffect(() => {
//         const canvas = canvasRef.current;
//         const ctx = canvas.getContext('2d');
//         let animationFrameId;

//         // Set canvas dimensions
//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;

//         function createParticle(x, y) {
//             const particle = {
//                 x,
//                 y,
//                 radius: Math.random() * 5 + 1, // Random radius between 1 and 6
//                 color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`, // Random color
//                 velocity: {
//                     x: (Math.random() - 0.5) * 2, // Random horizontal velocity
//                     y: (Math.random() - 0.5) * 2 // Random vertical velocity
//                 },
//                 alpha: 1 // Initial opacity
//             };
//             setParticles(prevParticles => [...prevParticles, particle]);
//         }

//         function animate() {
//             animationFrameId = requestAnimationFrame(animate);
//             ctx.clearRect(0, 0, canvas.width, canvas.height);

//             // Update and draw particles
//             particles.forEach((particle, index) => {
//                 particle.x += particle.velocity.x;
//                 particle.y += particle.velocity.y;
//                 particle.alpha -= 0.01; // Reduce opacity

//                 // Draw particle
//                 ctx.beginPath();
//                 ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
//                 ctx.fillStyle = `rgba(${particle.color}, ${particle.alpha})`;
//                 ctx.fill();

//                 // Check if particle is out of bounds or faded out, if yes, remove it
//                 if (particle.x - particle.radius > canvas.width ||
//                     particle.x + particle.radius < 0 ||
//                     particle.y - particle.radius > canvas.height ||
//                     particle.y + particle.radius < 0 ||
//                     particle.alpha <= 0) {
//                     // Remove particle from array
//                     setParticles(prevParticles => prevParticles.filter((_, i) => i !== index));
//                 }
//             });
//         }

//         // Event listener for mousemove to create particles
//         const handleMouseMove = (event) => {
//             createParticle(event.clientX, event.clientY);
//         };

//         canvas.addEventListener('mousemove', handleMouseMove);

//         // Start animation
//         animate();

//         // Cleanup function
//         return () => {
//             cancelAnimationFrame(animationFrameId);
//             canvas.removeEventListener('mousemove', handleMouseMove);
//         };
//     }, [particles]);

//     return <canvas ref={canvasRef} />;
// }

// export default ParticleCanvas;

import React, { useState, useRef } from 'react';

function ParticleCanvas() {
    const canvasRef = useRef(null);
    const [particles, setParticles] = useState([]);

    React.useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Set canvas dimensions
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        function createParticle(x, y) {
            const particle = {
                x,
                y,
                radius: Math.random() * 5 + 1, // Random radius between 1 and 6
                color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`, // Random color
                velocity: {
                    x: (Math.random() - 0.5) * 2, // Random horizontal velocity
                    y: (Math.random() - 0.5) * 2 // Random vertical velocity
                },
                alpha: 1 // Initial opacity
            };
            setParticles(prevParticles => [...prevParticles, particle]);
        }

        function animate() {
            animationFrameId = requestAnimationFrame(animate);
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw particles
            particles.forEach((particle, index) => {
                particle.x += particle.velocity.x;
                particle.y += particle.velocity.y;
                particle.alpha -= 0.01; // Reduce opacity

                // Draw particle
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${particle.color}, ${particle.alpha})`;
                ctx.fill();

                // Check if particle is out of bounds or faded out, if yes, remove it
                if (particle.x - particle.radius > canvas.width ||
                    particle.x + particle.radius < 0 ||
                    particle.y - particle.radius > canvas.height ||
                    particle.y + particle.radius < 0 ||
                    particle.alpha <= 0) {
                    // Remove particle from array
                    setParticles(prevParticles => prevParticles.filter((_, i) => i !== index));
                }
            });
        }

        // Event listener for mousemove to create particles
        const handleMouseMove = (event) => {
            createParticle(event.clientX, event.clientY);
        };

        canvas.addEventListener('mousemove', handleMouseMove);

        // Start animation
        animate();

        // Cleanup function
        return () => {
            cancelAnimationFrame(animationFrameId);
            canvas.removeEventListener('mousemove', handleMouseMove);
        };
    }, [particles]);

    return <canvas ref={canvasRef} />;
}

export default ParticleCanvas;