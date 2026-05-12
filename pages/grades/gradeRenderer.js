const GRADES_DATA_PATH = "./grades-data/grades.json";
function escapeHtml(value) {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;")
        .replace(/'/g, "&#39;");
}
function renderFeedback(feedback) {
    if (feedback.kind === "download") {
        const downloadAttribute = feedback.download ? " download" : "";
        return `<a class="feedback-button" href="${escapeHtml(feedback.href)}"${downloadAttribute}>${escapeHtml(feedback.label)}</a>`;
    }
    if (feedback.kind === "link") {
        return `<a class="feedback-button" href="${escapeHtml(feedback.href)}">${escapeHtml(feedback.label)}</a>`;
    }
    if (feedback.kind === "pending") {
        return `<span class="feedback-pending">${escapeHtml(feedback.label ?? "Pending")}</span>`;
    }
    return `<span class="feedback-button-blank">${escapeHtml(feedback.label ?? "No Comments")}</span>`;
}
function renderRow(grade) {
    return `
    <tr>
      <td><span class="type-badge ${grade.type}">${grade.type[0].toUpperCase()}${grade.type.slice(1)}</span></td>
      <td>${escapeHtml(grade.title)}</td>
      <td>${escapeHtml(grade.submitted)}</td>
      <td><span class="status-badge ${grade.status}">${grade.status[0].toUpperCase()}${grade.status.slice(1)}</span></td>
      <td><strong>${escapeHtml(grade.grade)}</strong></td>
      <td>${renderFeedback(grade.feedback)}</td>
    </tr>
  `;
}
function renderGrades(data) {
    const tableBody = document.getElementById("gradesTableBody");
    const studentName = document.getElementById("studentName");
    if (!(tableBody instanceof HTMLTableSectionElement)) {
        return;
    }
    if (studentName) {
        studentName.textContent = data.studentName;
    }
    tableBody.innerHTML = data.grades.map(renderRow).join("");
}
async function loadGrades() {
    const tableBody = document.getElementById("gradesTableBody");
    try {
        const response = await fetch(GRADES_DATA_PATH, { cache: "no-store" });
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }
        const data = (await response.json());
        renderGrades(data);
    }
    catch (error) {
        if (tableBody instanceof HTMLTableSectionElement) {
            tableBody.innerHTML = `
        <tr>
          <td colspan="6">
            <span class="feedback-pending">Unable to load grades right now.</span>
          </td>
        </tr>
      `;
        }
        console.error("Failed to load grades data", error);
    }
}
void loadGrades();
export {};
