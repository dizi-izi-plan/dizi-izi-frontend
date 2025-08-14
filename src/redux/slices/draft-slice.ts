import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Door {
  width: number;
  wall: number;
  x_center: number;
  open_direction: string;
}

interface Window {
  width: number;
  height: number;
  wall: number;
  x_center: number;
}

interface Balcony {
  width: number;
  wall: number;
  x_center: number;
}

interface RoomDescription {
  type_id: string;
  length: number;
  width: number;
  doors: Door[];
  windows: Window[];
  balconies: Balcony[];
}

interface FurniturePlacement {
  furniture_item_id: string;
  x_center: number;
  y_center: number;
  rotation_degree: number;
}

interface Layout {
  id: string;
  furniture_placements: FurniturePlacement[];
}

export interface Draft {
  id: string;
  name: string;
  is_draft: boolean;
  created_at: string;
  layout_requests_left: number;
  preferred_layout_id?: string;
  room_description?: RoomDescription;
  layouts?: Layout[];
}

interface DraftState {
  draft: Draft | null;
}

const DRAFT_KEY = 'draftProject';

// работа с localStorage
const loadDraftFromStorage = (): Draft | null => {
  try {
    const savedDraft = localStorage.getItem(DRAFT_KEY);
    return savedDraft ? JSON.parse(savedDraft) : null;
  } catch {
    console.error('Ошибка загрузки черновика.');
    return null;
  }
};

const saveDraftToStorage = (draft: Draft | null) => {
  try {
    if (draft) {
      localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
    } else {
      localStorage.removeItem(DRAFT_KEY);
    }
  } catch {
    console.error('Ошибка сохранения черновика');
  }
};

const initialState: DraftState = {
  draft: loadDraftFromStorage(),
};

const draftSlice = createSlice({
  name: 'draft',
  initialState,
  reducers: {
    saveDraft: (state, action: PayloadAction<Draft>) => {
      const draft = {
        ...action.payload,
        is_draft: true,
        created_at: action.payload.created_at || new Date().toISOString(),
      };

      state.draft = draft;
      saveDraftToStorage(draft);
    },

    deleteDraft: (state) => {
      state.draft = null;
      localStorage.removeItem(DRAFT_KEY);
    },
  },
});

export const draftAction = draftSlice.actions;
export const selectDraft = (state: { draft: DraftState }) => state.draft.draft;
export default draftSlice.reducer;
