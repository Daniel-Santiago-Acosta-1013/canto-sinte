import { Poem } from '../models/Poem';

export const getPoems = (): Poem[] => {
    const storedPoems = localStorage.getItem('poems');
    return storedPoems ? JSON.parse(storedPoems) : [];
};

export const addPoem = (poem: Poem): void => {
    const poems = getPoems();
    poems.push(poem);
    localStorage.setItem('poems', JSON.stringify(poems));
};

export const editPoem = (updatedPoem: Poem): void => {
    const poems = getPoems();
    const index = poems.findIndex(poem => poem.id === updatedPoem.id);
    if (index !== -1) {
        poems[index] = updatedPoem;
        localStorage.setItem('poems', JSON.stringify(poems));
    }
};

export const deletePoem = (id: string): void => {
    const poems = getPoems();
    const updatedPoems = poems.filter(poem => poem.id !== id);
    localStorage.setItem('poems', JSON.stringify(updatedPoems));
};
