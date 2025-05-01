document.getElementById("calculateButton").addEventListener("click", () => {
  const currentTime = document.getElementById("currentTime").value;
  const hoursWorked = document.getElementById("hoursWorked").value;
  const workdayHours = document.getElementById("workdayHours").value;

  if (!currentTime || !hoursWorked || !workdayHours) {
    alert("Please enter all required fields.");
    return;
  }

  const completionTime = calculateCompletionTime(currentTime, hoursWorked, workdayHours);
  document.getElementById("result").textContent = `You will complete ${workdayHours} hours at: ${completionTime}`;
});

function calculateCompletionTime(currentTime, hoursWorked, workdayHours) {
  const [currentHours, currentMinutes] = currentTime.split(":").map(Number);
  const [workedHours, workedMinutes] = hoursWorked.split(":").map(Number);

  const totalMinutesWorked = (workedHours * 60) + workedMinutes;
  const targetMinutes = workdayHours * 60;  // Dynamic work hours
  const remainingMinutes = targetMinutes - totalMinutesWorked;

  if (remainingMinutes <= 0) return "Already completed!";

  const completionHours = currentHours + Math.floor(remainingMinutes / 60);
  const completionMinutes = currentMinutes + (remainingMinutes % 60);

  const finalHours = (completionHours + Math.floor(completionMinutes / 60)) % 24;
  const finalMinutes = completionMinutes % 60;

  return `${String(finalHours).padStart(2, '0')}:${String(finalMinutes).padStart(2, '0')}`;
}
