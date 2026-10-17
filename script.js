// --- ELEMEN DOM ---
const calcForm = document.getElementById("calc-form");
const initialValInput = document.getElementById("initial-val");
const finalValInput = document.getElementById("final-val");

const resultCard = document.getElementById("result-card");
const statusBadge = document.getElementById("status-badge");
const statusIcon = document.getElementById("status-icon");
const statusText = document.getElementById("status-text");

const percentageDisplay = document.getElementById("percentage-display");
const diffDisplay = document.getElementById("diff-display");
const directionDisplay = document.getElementById("direction-display");

// --- LOGIKA KALKULASI ---
calcForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const initialVal = parseFloat(initialValInput.value);
    const finalVal = parseFloat(finalValInput.value);

    if (isNaN(initialVal) || isNaN(finalVal)) {
        alert("Harap masukkan angka yang valid!");
        return;
    }

    if (initialVal === 0) {
        alert("Nilai awal tidak boleh 0 karena tidak dapat dibagi dengan nol!");
        return;
    }

    // Rumus: ((Nilai Akhir - Nilai Awal) / Nilai Awal) * 100
    const difference = finalVal - initialVal;
    const percentChange = (difference / Math.abs(initialVal)) * 100;

    // Reset status badge
    statusBadge.className = "badge-status";

    if (percentChange > 0) {
        statusBadge.classList.add("increase");
        statusIcon.textContent = "🚀";
        statusText.textContent = "Kenaikan (Increase)";
        directionDisplay.textContent = "Naik 📈";
    } else if (percentChange < 0) {
        statusBadge.classList.add("decrease");
        statusIcon.textContent = "🔻";
        statusText.textContent = "Penurunan (Decrease)";
        directionDisplay.textContent = "Turun 📉";
    } else {
        statusBadge.classList.add("neutral");
        statusIcon.textContent = "⚖️";
        statusText.textContent = "Tidak Ada Perubahan";
        directionDisplay.textContent = "Tetap ➡️";
    }

    // Format tampilan angka
    const formattedPercent = Math.abs(percentChange).toFixed(2);
    percentageDisplay.textContent = `${percentChange > 0 ? '+' : percentChange < 0 ? '-' : ''}${formattedPercent}%`;
    diffDisplay.textContent = `${difference > 0 ? '+' : ''}${difference.toLocaleString("id-ID")}`;

    resultCard.classList.remove("hidden");
});
