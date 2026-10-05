const state = { movies: [], saved: JSON.parse(localStorage.getItem('dotflix-my-list') || '[]') };
const catalogContent = document.querySelector('#catalog-content');
const loadingState = document.querySelector('#loading-state');
const errorState = document.querySelector('#error-state');
const emptyState = document.querySelector('#empty-state');
const myListContent = document.querySelector('#my-list-content');
const myListEmpty = document.querySelector('#my-list-empty');
const dialog = document.querySelector('#film-dialog');
const dialogContent = document.querySelector('#dialog-content');
const backdrop = document.querySelector('#dialog-backdrop');

function saveList() { localStorage.setItem('dotflix-my-list', JSON.stringify(state.saved)); }
function isSaved(id) { return state.saved.includes(id); }
function toggleSaved(id) { state.saved = isSaved(id) ? state.saved.filter(item => item !== id) : [...state.saved, id]; saveList(); renderCatalog(document.querySelector('#search-input').value); renderMyList(); }
function card(movie) { return `<article class="film-card"><button class="poster-button" type="button" data-detail="${movie.id}" aria-label="Buka detail ${movie.title}"><img class="poster" src="${movie.poster}" alt="Poster ${movie.title}" loading="lazy"></button><div class="card-body"><h4 class="card-title">${movie.title}</h4><p class="card-meta">${movie.year} · ${movie.genre.join(' · ')}</p><button class="button button-secondary card-action" type="button" data-save="${movie.id}">${isSaved(movie.id) ? 'Hapus dari My List' : 'Simpan ke My List'}</button></div></article>`; }
function renderCatalog(query = '') { const filtered = state.movies.filter(movie => movie.title.toLowerCase().includes(query.trim().toLowerCase())); catalogContent.innerHTML = ''; emptyState.hidden = filtered.length > 0; document.querySelector('#result-label').textContent = query ? `${filtered.length} hasil` : ''; if (!filtered.length) return; const genres = [...new Set(filtered.flatMap(movie => movie.genre))]; genres.forEach(genre => { const movies = filtered.filter(movie => movie.genre.includes(genre)); catalogContent.insertAdjacentHTML('beforeend', `<section class="genre-block" aria-labelledby="genre-${genre}"><h3 class="genre-title" id="genre-${genre}">${genre}</h3><div class="film-row">${movies.map(card).join('')}</div></section>`); }); catalogContent.hidden = false; }
function renderMyList() { const movies = state.movies.filter(movie => isSaved(movie.id)); myListContent.innerHTML = movies.map(card).join(''); myListEmpty.hidden = movies.length > 0; }
function openDetail(id) { const movie = state.movies.find(item => item.id === Number(id)); if (!movie) return; dialogContent.innerHTML = `<div class="dialog-layout"><img class="poster" src="${movie.poster}" alt="Poster ${movie.title}"><div class="dialog-text"><p class="eyebrow">${movie.year} · ${movie.genre.join(' · ')}</p><h2 id="dialog-title">${movie.title}</h2><p>${movie.synopsis}</p><button class="button button-primary" type="button" data-save="${movie.id}">${isSaved(movie.id) ? 'Hapus dari My List' : 'Simpan ke My List'}</button></div></div><iframe class="trailer" src="${movie.trailer}" title="Trailer ${movie.title}" loading="lazy" allowfullscreen></iframe>`; dialog.showModal(); backdrop.hidden = false; }
function closeDetail() { dialog.close(); backdrop.hidden = true; }
document.addEventListener('click', event => { const detail = event.target.closest('[data-detail]'); const save = event.target.closest('[data-save]'); if (detail) openDetail(detail.dataset.detail); if (save) { toggleSaved(Number(save.dataset.save)); if (dialog.open) openDetail(save.dataset.save); } });
document.querySelector('#dialog-close').addEventListener('click', closeDetail);
dialog.addEventListener('close', () => { backdrop.hidden = true; });
document.querySelector('#search-input').addEventListener('input', event => renderCatalog(event.target.value));
document.querySelector('#hero-button').addEventListener('click', () => openDetail(state.movies.find(movie => movie.featured)?.id || state.movies[0]?.id));

async function init() { try { const response = await fetch('data/movies.json'); if (!response.ok) throw new Error('Data gagal'); state.movies = await response.json(); loadingState.hidden = true; renderCatalog(); renderMyList(); } catch { loadingState.hidden = true; errorState.hidden = false; } }
init();
