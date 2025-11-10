// ===== Profile Editing & Logo Preview =====
const editToggle = document.getElementById('edit-toggle');
const editor = document.getElementById('editor');
const logoInput = document.getElementById('logo-input');
const logoPreview = document.getElementById('logo-preview');

const inputs = {
  set: document.getElementById('input-set'),
  main: document.getElementById('input-main'),
  aliases: document.getElementById('input-aliases'),
  neighborhood: document.getElementById('input-neighborhood'),
  years: document.getElementById('input-years'),
  concept: document.getElementById('input-concept'),
  allies: document.getElementById('input-allies'),
  opps: document.getElementById('input-opps'),
  history: document.getElementById('input-history')
};

const fields = {
  set: document.getElementById('profile-set'),
  main: document.getElementById('profile-main'),
  aliases: document.getElementById('profile-aliases'),
  neighborhood: document.getElementById('profile-neighborhood'),
  years: document.getElementById('profile-years'),
  concept: document.getElementById('profile-concept'),
  allies: document.getElementById('profile-allies'),
  opps: document.getElementById('profile-opps'),
  history: document.getElementById('profile-history')
};

function openEditor() {
  inputs.set.value = fields.set.textContent;
  inputs.main.value = fields.main.textContent;
  inputs.aliases.value = fields.aliases.textContent;
  inputs.neighborhood.value = fields.neighborhood.textContent;
  inputs.years.value = fields.years.textContent;
  inputs.concept.value = fields.concept.textContent;
  inputs.allies.value = fields.allies.textContent;
  inputs.opps.value = fields.opps.textContent;
  inputs.history.value = fields.history.textContent;
  editor.classList.remove('hidden');
}
function closeEditor() { editor.classList.add('hidden'); }
editToggle.addEventListener('click', () => {
  editor.classList.contains('hidden') ? openEditor() : closeEditor();
});
document.getElementById('save-profile').addEventListener('click', () => {
  fields.set.textContent = inputs.set.value || 'Unnamed Set';
  fields.main.textContent = inputs.main.value || '—';
  fields.aliases.textContent = inputs.aliases.value || '—';
  fields.neighborhood.textContent = inputs.neighborhood.value || '—';
  fields.years.textContent = inputs.years.value || '—';
  fields.concept.textContent = inputs.concept.value || '—';
  fields.allies.textContent = inputs.allies.value || '—';
  fields.opps.textContent = inputs.opps.value || '—';
  fields.history.textContent = inputs.history.value || '—';
  closeEditor();
});

logoInput.addEventListener('change', (evt) => {
  const f = evt.target.files && evt.target.files[0];
  if (!f) return;
  logoPreview.src = URL.createObjectURL(f);
});

// ===== Last-updated timestamp =====
const lastUpdatedEl = document.getElementById('last-updated');
const now = new Date();
lastUpdatedEl.textContent = `Last updated: ${now.toLocaleString()}`;
