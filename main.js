document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky CTA Logic
    const stickyCta = document.getElementById('sticky-cta');
    const heroSection = document.querySelector('.hero');
    
    // Check scroll position to show/hide sticky CTA
    window.addEventListener('scroll', () => {
        if (window.scrollY > heroSection.offsetHeight) {
            stickyCta.classList.add('visible');
            stickyCta.classList.remove('hidden');
        } else {
            stickyCta.classList.remove('visible');
        }
    });

    // 2. FAQ Accordion Logic
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            // Toggle active class on question
            question.classList.toggle('active');
            
            // Get the answer div
            const answer = question.nextElementSibling;
            
            if (question.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = '0';
            }
        });
    });

    // 3. Form Submission Handling & UTM Tracking
    // Grabbing URL parameters (like ?utm_source=facebook) and populating hidden fields
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get('utm_source') || '';
    const utmMedium = urlParams.get('utm_medium') || '';
    const utmCampaign = urlParams.get('utm_campaign') || '';
    
    if (document.getElementById('utm_source')) document.getElementById('utm_source').value = utmSource;
    if (document.getElementById('utm_medium')) document.getElementById('utm_medium').value = utmMedium;
    if (document.getElementById('utm_campaign')) document.getElementById('utm_campaign').value = utmCampaign;

    const leadForm = document.getElementById('leadCaptureForm');
    const formContainer = document.getElementById('form-container');
    const thankYouMessage = document.getElementById('thankYouMessage');

    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            // Note: We DO NOT use e.preventDefault() here.
            // We want the browser to naturally POST the form securely, 
            // but we use target="hidden_iframe" in the HTML so it happens invisibly!
            
            // Fire Facebook Pixel Event to track conversions perfectly
            if (typeof fbq !== 'undefined') {
                fbq('track', 'Lead');
                console.log("Facebook Pixel 'Lead' event fired.");
            }
            
            // Give the browser a half-second to seamlessly fire the POST to the iframe, then hide form
            setTimeout(() => {
                leadForm.style.display = 'none';
                thankYouMessage.classList.remove('hidden');
                thankYouMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 500);
        });
    }

    // 4. Video Play Simulation
    const playOverlay = document.querySelector('.play-overlay');
    const videoElement = document.querySelector('.video-wrapper video');

    if (playOverlay && videoElement) {
        playOverlay.addEventListener('click', () => {
            playOverlay.style.display = 'none';
            videoElement.setAttribute('controls', 'true');
            videoElement.play().catch(e => console.log("Video playback error due to dummy src", e));
        });
    }
});
