const memberCards = document.querySelectorAll('.member-card');

memberCards.forEach(memberCard => {
    memberCard.addEventListener('click', () => {
        const nameText = memberCard.querySelector('.member-card-text');

        // nameText wasn't found so it is NULL
        if (!nameText) {
            console.error("Could not retrieve Member Card's Text!")
            return;
        }
        
        // Splits into an array, firstName at index 0, lastName at index 1
        const names = nameText.textContent.split(' ');
        
        let firstName = names[0];
        firstName = firstName.toLowerCase();

        window.location.href = "/members/" + firstName + '.html';
    });
});