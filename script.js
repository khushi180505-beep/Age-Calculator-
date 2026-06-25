function calculateAge() {
    const birthDate = document.getElementById("birthDate").value;
    const result = document.getElementById("result");

    if (!birthDate) {
        result.innerHTML = "Please select your birth date.";
        return;
    }

    const birth = new Date(birthDate);
    const today = new Date();

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
        months--;
        const lastMonth = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        );
        days += lastMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    result.innerHTML = `
        You are <br>
        <span style="color:#2575fc">${years}</span> Years,
        <span style="color:#2575fc">${months}</span> Months,
        and <span style="color:#2575fc">${days}</span> Days old.
    `;
}
