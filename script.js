/* ===== Edit these settings ===== */
const CONFIG = {
  offerText: "Limited seats: only 25 students per batch. Enroll now!",
  eligibility: "Please confirm the current eligibility requirement with the institute before applying.",
  eligibilityDoc: "As per course document: S.S.C. Pass",
  requireUploads: false,            // true = certificate, photo and ID proof become required
  endpoint: ""                      // e.g. Formspree / your server URL. Empty = saved in this browser only
};

const $ = (s, r = document) => r.querySelector(s);
const steps = [...document.querySelectorAll(".step")];
let cur = 0, last = null;

$("#offerbar").innerHTML = CONFIG.offerText + ' <a href="#admission">Apply now</a>';
$("#elig").textContent = CONFIG.eligibility;
$("#eligdoc").textContent = CONFIG.eligibilityDoc;
$("#yr").textContent = new Date().getFullYear();
if (CONFIG.requireUploads) document.querySelectorAll(".docup input").forEach(i => i.required = true);

$("#burger").onclick = e => {
  const o = $("#links").classList.toggle("open");
  e.currentTarget.setAttribute("aria-expanded", o);
};
$("#links").onclick = e => { if (e.target.tagName === "A") $("#links").classList.remove("open"); };

$("#prog").innerHTML = steps.map(() => "<i></i>").join("");

function show(n) {
  cur = n;
  steps.forEach((s, i) => s.classList.toggle("show", i === n));
  document.querySelectorAll("#prog i").forEach((b, i) => b.classList.toggle("on", i <= n));
  $("#sname").textContent = `Step ${n + 1} of ${steps.length}: ${steps[n].dataset.name}`;
  $("#back").style.visibility = n ? "visible" : "hidden";
  $("#next").classList.toggle("hide", n === steps.length - 1);
  $("#submit").classList.toggle("hide", n !== steps.length - 1);
  $("#err").textContent = "";
}

function validate(step) {
  let firstBad = null;
  step.querySelectorAll("input,select,textarea").forEach(f => {
    const bad = !f.checkValidity();
    f.classList.toggle("bad", bad);
    if (bad && !firstBad) firstBad = f;
  });
  if (firstBad) {
    $("#err").textContent = firstBad.type === "checkbox"
      ? "Please tick the declaration to continue."
      : "Please check: " + (firstBad.title || firstBad.closest("label").firstChild.textContent.replace("*", "")) + ".";
    firstBad.focus();
  } else $("#err").textContent = "";
  return !firstBad;
}

$("#next").onclick = () => { if (validate(steps[cur])) { show(cur + 1); $("#admission").scrollIntoView(); } };
$("#back").onclick = () => show(cur - 1);
$("#form").addEventListener("input", e => e.target.classList.remove("bad"));

$("#form").onsubmit = async e => {
  e.preventDefault();
  if (!validate(steps[cur])) return;
  const fd = new FormData(e.target);
  const d = new Date();
  const ref = "MVF-" + d.getFullYear() + String(d.getMonth() + 1).padStart(2, "0") + String(d.getDate()).padStart(2, "0") + "-" + Math.random().toString(36).slice(2, 7).toUpperCase();
  const data = {};
  fd.forEach((v, k) => data[k] = v instanceof File ? (v.name || "") : v);
  data.course = "C.C. in Yoga & Naturopathy (201208), 1 Year, Part-Time";
  data.refNo = ref; data.submittedAt = d.toLocaleString();
  fd.append("refNo", ref); fd.append("course", data.course);
  $("#submit").disabled = true; $("#submit").textContent = "Submitting...";
  try {
    if (CONFIG.endpoint) {
      const r = await fetch(CONFIG.endpoint, { method: "POST", body: fd, headers: { Accept: "application/json" } });
      if (!r.ok) throw 0;
    } else {
      const all = JSON.parse(localStorage.getItem("mvfApplications") || "[]");
      all.push(data); localStorage.setItem("mvfApplications", JSON.stringify(all));
    }
  } catch (_) {
    $("#err").textContent = "Submission failed. Please try again or call 9987941559.";
    $("#submit").disabled = false; $("#submit").textContent = "Submit Admission Application";
    return;
  }
  last = data;
  $("#form").classList.add("hide");
  $("#refno").textContent = ref;
  $("#sum").innerHTML = [["Application No.", ref], ["Applicant", data.fullName], ["Course", "C.C. in Yoga & Naturopathy"], ["Submitted", data.submittedAt]]
    .map(([k, v]) => `<dt>${k}</dt><dd></dd>`).join("");
  document.querySelectorAll("#sum dd").forEach((dd, i) => dd.textContent = [ref, data.fullName, "C.C. in Yoga & Naturopathy", data.submittedAt][i]);
  $("#done").classList.remove("hide"); $("#done").focus();
  $("#admission").scrollIntoView();
};

$("#dl").onclick = () => {
  const t = "MANOHAR VASUDHA FOUNDATION - ADMISSION APPLICATION\n\n" + Object.entries(last).map(([k, v]) => `${k}: ${v}`).join("\n");
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([t], { type: "text/plain" }));
  a.download = last.refNo + ".txt"; a.click();
};

show(0);
