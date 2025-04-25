document.addEventListener('DOMContentLoaded', () => {
    const carouselTrack = document.querySelector('.carousel-track');
    const slides = Array.from(carouselTrack.children);
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const slideWidth = slides[0].offsetWidth + 10; 

    let currentPosition = 0;

    function setTrackPosition(position) {
        carouselTrack.style.transform = `translateX(${position}px)`; 
    }

    nextButton.addEventListener('click', () => {
        currentPosition -= slideWidth;
        if (currentPosition < -slideWidth * (slides.length - 1)) {
            currentPosition = 0; 
        }
        setTrackPosition(currentPosition);
    });

    prevButton.addEventListener('click', () => {
        currentPosition += slideWidth;
        if (currentPosition > 0) {
            currentPosition = -slideWidth * (slides.length - 1);
        }
        setTrackPosition(currentPosition);
    });


    const subscribeButton = document.getElementById('subscribeButton');
    const subscriptionOverlay = document.getElementById('subscriptionOverlay');  
    const ticketAnnouncement = document.querySelector('.ticket-announcement');
    const submitFormButton = document.getElementById('submitForm');

    subscribeButton.addEventListener('click', function () {
        subscriptionOverlay.classList.add('active');
    });

    submitFormButton.addEventListener('click', function (event) {
        event.preventDefault(); 

        
        subscriptionOverlay.classList.remove('active'); 

        document.getElementById('name').value = '';
        document.getElementById('email').value = '';


        const notification = document.getElementById('subscriptionNotification');
        const notificationMessage = document.getElementById('notificationMessage');
        notificationMessage.textContent = 'Спасибо за подписку!'; 
        notification.classList.add('active');

        
        setTimeout(() => {
            notification.classList.remove('active');
        }, 5000);

        
        const closeNotificationButton = document.getElementById('closeNotification');
        closeNotificationButton.addEventListener('click', () => {
            notification.classList.remove('active');
        });
        
    });

});

