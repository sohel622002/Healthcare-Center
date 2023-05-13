let sliderAt = 0

const reviews = [
    {
        review: "Thank You Mem for Consulting me there is so much diffrence in my body weight in just 3 months. I have Followed all your advice and here i am.Thank You once again for changing my life"
    },
    {
        review: "Thank You Mem for Consulting me there is so much diffrence in my body weight in just 3 months. I have Followed all your advice and here i am.Thank You once again for changing my life"
    },
    {
        review: "Thank You Mem for Consulting me there is so much diffrence in my body weight in just 3 months. I have Followed all your advice and here i am.Thank You once again for changing my life"
    },
    {
        review: "Thank You Mem for Consulting me there is so much diffrence in my body weight in just 3 months. I have Followed all your advice and here i am.Thank You once again for changing my life"
    }
]

function reviewDiv() {
    let review = reviews.map(singleReview => {
        return `<div class="reviews_cards">${singleReview.review}</div>`
    }).join('')

    document.querySelector(".review_container").innerHTML = review
}
reviewDiv()

function slide(sliderAt) {
    document.querySelector(".review_container").style.left = (sliderAt * 100) + '%'
}

function hrefFunction() {
    window.location.href = "#contact"
}

function sendEmail() {
    let name = document.querySelector('#name_field').value
    let age = document.querySelector('#age_field').value
    let contact_email_field = document.querySelector('#contact_email_field').value
    let address = document.querySelector("#address_field").value

    Email.send({
        SecureToken: "5312d358-8706-424b-96bf-a370a58e8b3a",
        To: 'sohelsindhi2002@gmail.com',
        From: "sohelshaikh01231@gmail.com",
        Subject: "Want to Fix an Appointment",
        Body:
            "Name : " + name +
            "<br/> Age : " + age +
            "<br/> Contact No/Email : " + contact_email_field +
            "<br/> Address : " + address
    }).then(
        message => {
            alert("Your details have been sent and we'll contact you"),
                document.querySelector('#name_field').value = '',
                document.querySelector('#age_field').value = '',
                document.querySelector('#contact_email_field').value = '',
                document.querySelector("#address_field").value = ''
        }
    );
};

function slideRight() {
    if (sliderAt == '-' + (reviews.length - 1)) return
    sliderAt = sliderAt - 1
    slide(sliderAt)
}

function slideLeft() {
    if (sliderAt === 0) return
    sliderAt = sliderAt + 1
    slide(sliderAt)
}
