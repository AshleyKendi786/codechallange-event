
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('guest-form');
  const input = document.getElementById('guest-name');
  const category = document.getElementById('guest-category');
  const guestList = document.getElementById('guest-list');

  const maxGuests = 100;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const guestName = input.value.trim();
    const guestCategory = category.value;

    if (!guestName) {
      alert('Please enter a name.');
      return;
    }

    if (guestList.children.length >= maxGuests) {
      alert('Guest list is full!');
      return;
    }

    // ✅ Create list item
    const li = document.createElement('li');

    // ✅ Add guest info
    const span = document.createElement('span');
    span.textContent = `${guestName} (${guestCategory})`;

    const time = document.createElement('small');
    time.textContent = `Added at ${new Date().toLocaleTimeString()}`;
    time.style.marginLeft = '10px';

    // ✅ Add RSVP button
    const rsvpBtn = document.createElement('button');
    rsvpBtn.textContent = 'Not Attending';
    rsvpBtn.type = 'button';
    rsvpBtn.addEventListener('click', () => {
      const attending = li.classList.toggle('attending');
      rsvpBtn.textContent = attending ? 'Attending' : 'Not Attending';
    });

    // ✅ Add Edit button
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.type = 'button';
    editBtn.addEventListener('click', () => {
     const newName = prompt('Edit guest name:', span.textContent.split(' (')[0]);
      if (newName) {
        span.textContent = `${newName.trim()} (${guestCategory})`;
      }
    });

    // ✅ Add Remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.type = 'button';
    removeBtn.addEventListener('click', () => {
      guestList.removeChild(li);
    });

    // ✅ Append guest info and buttons to the list item
    li.appendChild(span);
    li.appendChild(time);
    li.appendChild(rsvpBtn);
    li.appendChild(editBtn);
    li.appendChild(removeBtn);

    // ✅ Add list item to the guest list
    guestList.appendChild(li);

    // ✅ Clear input
    input.value = '';
  });
});
