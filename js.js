
      
function updateBookingDetails() {
    // Update selected seats count and display
    const selectedSeats = document.querySelectorAll('.seat.bg-color0').length;
    document.getElementById('selected-seats').innerText = `Seat ${selectedSeats}`;

    // Calculate and update total price
    const seatPrice = 550; // Price per seat
    const totalPrice = selectedSeats * seatPrice;
    document.getElementById('total-price').innerText = `BDT ${totalPrice}`;

    // Update available seats count
    const availableSeats = 40 - selectedSeats;
    document.getElementById('available-seats').innerText = `${availableSeats} Seats left`;

    // Enable/disable next button based on seat selection and phone number entry
    const phoneNumber = document.getElementById('phone-number').value.trim();
    const nextButton = document.querySelector('.btn-next');
    if (selectedSeats > 0 && phoneNumber !== '') {
        nextButton.removeAttribute('disabled');
    } else {
        nextButton.setAttribute('disabled', 'true');
    }

    // Update grand total
    document.getElementById('grand-total').innerText = `BDT ${totalPrice}`;
}
// Add event listeners to all seat buttons
const seatButtons = document.querySelectorAll('.seat');
seatButtons.forEach(button => {
    // Initialize toggle flag
    button.toggleFlag = false;

    button.addEventListener('click', () => {
        // Check if the maximum seat limit (4) is reached
        const selectedSeats = document.querySelectorAll('.seat.bg-color0').length;
        if (selectedSeats >= 4 && !button.toggleFlag) {
            alert("Maximum 4 seats can be selected.");
            return;
        }

        // Toggle the seat button color
        button.classList.toggle('bg-color0');
        button.classList.toggle('text-white');

        // Update booking details
        updateBookingDetails();

        // Toggle the flag
        button.toggleFlag = !button.toggleFlag;

        // Update selected seat info
        if (button.classList.contains('bg-color0')) {
            const seatNumber = button.textContent.trim(); // Get the seat number

            // Create seat information container
            const seatInfoDiv = document.createElement('div');
            seatInfoDiv.classList.add('flex', 'justify-between', 'font-semibold', 'text-lg', 'text-color4');
            
            // Add seat number
            const seatNoElement = document.createElement('p');
            seatNoElement.id = 'sit-no';
            seatNoElement.textContent = seatNumber;
            seatInfoDiv.appendChild(seatNoElement);

            // Add seat type (e.g., Economy)
            const seatTypeElement = document.createElement('p');
            seatTypeElement.id = 'economy'; // Assuming seat type is 'Economy'
            seatTypeElement.textContent = 'Economy'; // Set seat type here
            seatInfoDiv.appendChild(seatTypeElement);

            // Add default price
            const defaultPriceElement = document.createElement('p');
            defaultPriceElement.id = 'default-taka';
            defaultPriceElement.textContent = '550'; 
            seatInfoDiv.appendChild(defaultPriceElement);

            const seatRowContainer = document.getElementById('sit-info-main');
            seatRowContainer.appendChild(seatInfoDiv);
        }
    });
});


// Add event listener for phone number input
const phoneNumberInput = document.getElementById('phone-number');
phoneNumberInput.addEventListener('input', () => {
    updateBookingDetails();
});


function toggleModal() {
    const modal = document.getElementById("myModal");
    modal.classList.toggle("hidden");
}

function confirmBooking() {
    toggleModal(); // Close the modal after confirmation
    alert("Booking confirmed!");
}

