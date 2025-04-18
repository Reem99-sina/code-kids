export interface ResponseChildParentAdd {
  age?: number;
  avatarId?: number;
  createdAt?: string;
  email?: null | string;
  fullname?: string;
  googleId?: null | string;
  id?: number;
  is_online?: boolean;
  last_active?: string;
  parentId?: number;
  school_name?: string;
  skills?: {
    name: string;
    image: string;
  }[];
  socket_id?: null | number;
  status?: string;
  updatedAt?: string;
  userType?: "child" | "parent";
  username?: string;
}

export interface TypeoFSkillsResponse {
  name: string;
  id: number;
  image: string;
}
export interface ActiveCoursesInterface {
  name: string;
  progress: number;
  difficulty: string;
}
export interface GetChildByParent {
  fullName: string;
  age: number;
  avatarId: number;
  completedTracks: number;
  completedCourses: number;
  activeCourses: ActiveCoursesInterface[];
  lastActivity: string;
  rewards: {
    stars: number;
    badges: number;
  };
  activeDays: string[];
}

export interface RecommendedCoursesResponse {
  id: number;
  trackId: number;
  name: string;
  description: string;
  totalLessons: number;
  skillLevel: string;
  suggestedNextTrackId: number;
  totalParticipants: number;
  totalBadges: number;
  totalStars: number;
  createdAt:string;
  updatedAt:string;
}
