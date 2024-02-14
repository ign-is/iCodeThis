const container = document.querySelector('.container');
const input = document.querySelector('input');

const people = [
    {
        name: 'Lelah Nichols',
        company: 'Troy, MI',
        interests: ['clothes', 'steam'],
        img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'Jesus Weiss',
        company: 'Fort Worth',
        interests: ['headset', 'gadget', 'speed', 'winter'],
        img: 'https://images.unsplash.com/photo-1582233479366-6d38bc390a08?q=80&w=1483&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'Annie Rice',
        company: 'Austin, TX',
        interests: ['read', 'mountain', 'trip', 'earth', 'nature'],
        img: 'https://images.unsplash.com/photo-1578489758854-f134a358f08b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'Robert Brower',
        company: 'Cincinnati, OH',
        interests: ['Maintenance', 'gears', 'frames', 'repair'],
        img: 'https://images.unsplash.com/photo-1502452213786-a5bc0a67e963?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'Amy Campbell',
        company: 'Warrior, AL',
        interests: ['music', 'disk'],
        img: 'https://images.unsplash.com/photo-1547200413-5f93d7e3673e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'Anthony S. Morin',
        company: 'Lyndhurst, NJ',
        interests: ['vintage', 'electric'],
        img: 'https://images.unsplash.com/photo-1549913772-820279f909b7?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
]


const users = people.map(user => {
    return `<div class="user">
                    <img 
                        src=${user.img} 
                        alt="face"
                    >
                    <div class="name-place">
                        <h2>${user.name}</h2>
                        <p>${user.company}</p>
                        <div class="interests">
                      ${interestsFunc(user.interests)}
                        </div>
                    </div>
                </div>`;
})

container.innerHTML = users.join('');

function interestsFunc(array) {
    let arr = array.map(interest => {
        return `<span>${interest}</span>`
    })
    return arr.join('');
}

function showUsers(users) {
    let result = users.map(user => {
        return `<div class="user">
                    <img 
                        src=${user.img} 
                        alt="face"
                    >
                    <div class="name-place">
                        <h2>${user.name}</h2>
                        <p>${user.company}</p>
                        <div class="interests">
                        ${interestsFunc(user.interests)}
                        </div>
                    </div>
                </div>`;
    })

    container.innerHTML = result.join('');
}

input.addEventListener("input", e => {
    const element = e.target.value.toLowerCase()
    const users= people.filter(user =>
      user.name.toLowerCase().includes(element)
    )

    showUsers(users);
})