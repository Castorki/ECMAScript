async function getUserDate(id) {
    let response = await fetch(`https://gorest.co.in/public/v2/users/${id}`);

    if (response.status === 200) {
        let data = await response.json();
        return data;
    } else {
        return `Error ${response.status}: ${response.statusText || 'No status text'}`;
    }
}


getUserDate(7752930).then(user => console.log(user)).catch(error => console.error(error));


async function saveUserData(userData) {
    let postResponse = await fetch('https://gorest.co.in/public/v2/users/7374231/posts', {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
            authorization: 'Bearer 84acf9d70ac605967bb1e555a09c04dc5ef7b083002d5e3992b6b78ba46ea8a3',
            'Content-Type': 'application/json'
        }
    });

    if (postResponse.ok) {
        let postData = await postResponse.json();
        return postData;
    } else {
        return `Error ${postResponse.status}: ${postResponse.statusText || 'No status text'}`;
    }
}

let user = {
    id: 197601,
    user_id: 7752931,
    title: "Desparatus capto alo vulariter curriculum quia.",
    body: "Avaritia altus vobis. Officia strenuus cohaero. Suasoria tui corrumpo. Tero soleo officia. Canis sui beatus. Administratio corpus sit. Testimonium videlicet ea. Bonus annus desparatus. Tabesco absorbeo aduro. Cornu vix dedico. Cunctatio subnecto supellex. Convoco aureus deserunt. Aperio pariatur stillicidium. Crustulum umbra aequitas. Armo coerceo coruscus. Quod quibusdam sublime. Et suus via. Coaegresco culpa labore."
}

saveUserData(user).then(() => {
    console.log('User data saved successfully');
}).catch(error => console.error(error));


function delayChanging(id, delayTime) {
    setTimeout(function () {
        let changingElemene = document.getElementById(id);
        changingElemene.style.backgroundColor = 'yellow';
        changingElemene.style.border = '6px solid red';
        changingElemene.textContent = 'Changed!';
    }, delayTime);
}

delayChanging(1, 3000);