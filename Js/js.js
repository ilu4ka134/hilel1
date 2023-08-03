function getRandomColor() {
  const symbols = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += symbols[Math.floor(Math.random() * symbols.length)];
  }
  return color;
}

async function getContacts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const contacts = await response.json();
    return contacts;
  } catch (error) {
    console.log("Ошибка получения контактов:", error);
  }
}

function createContactCard(contact) {
  const { name, email, phone, address } = contact;
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
  const avatarColor = getRandomColor();

  const cardContainer = document.createElement("div");
  cardContainer.className = "contact-card";

  const avatar = document.createElement("div");
  avatar.className = "avatarki";
  avatar.style.backgroundColor = avatarColor;
  avatar.textContent = initials;

  const nameElement = document.createElement("div");
  nameElement.className = "names";
  nameElement.textContent = name;

  const phoneElement = document.createElement("div");
  phoneElement.className = "contact-inform";
  const phoneLink = document.createElement("a");
  phoneLink.href = "tel:" + phone;
  phoneLink.textContent = phone;
  phoneElement.appendChild(phoneLink);

  const emailElement = document.createElement("div");
  emailElement.className = "contact-inform";
  const emailLink = document.createElement("a");
  emailLink.href = "mailto:" + email;
  emailLink.textContent = email;
  emailElement.appendChild(emailLink);

  const addressElement = document.createElement("div");
  addressElement.className = "contact-inform";
  addressElement.textContent =
    address.city + ", " + address.street + ", " + address.suite;

  cardContainer.appendChild(avatar);
  cardContainer.appendChild(nameElement);
  cardContainer.appendChild(emailElement);
  cardContainer.appendChild(phoneElement);
  cardContainer.appendChild(addressElement);

  return cardContainer;
}

async function displayContacts() {
  const contactsContainer = document.getElementById("contacts-container");
  const contacts = await getContacts();

  contacts.forEach((contact) => {
    const contactCard = createContactCard(contact);
    contactsContainer.appendChild(contactCard);
  });
}

displayContacts();
