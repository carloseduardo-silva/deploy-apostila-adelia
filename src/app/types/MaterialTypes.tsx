export interface ClientViewProps {
  apostila: Apostila;
  tag: string;
}

export interface Apostila {
  tag: string;
  video_transcript: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  unit_name: string;
  learning_objectives: string;
  specific_objectives: string;
  audio_script: any;
  course: Course;
  subject: Subject;
  content_blocks: ContentBlock[];
  mind_map: MindMap;
  additional_content: AdditionalContent[];
  reflective_questions: ReflectiveQuestion[];
  summary: Summary[];
}

export interface Course {
  data: Data;
}

export interface Data {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  Nome: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Subject {
  data: Data2;
}

export interface Data2 {
  id: number;
  attributes: Attributes2;
}

export interface Attributes2 {
  Nome: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ContentBlock {
  id: number;
  body_text: string;
  title: string;
  type: string;
}

export interface MindMap {
  data: any;
}

export interface AdditionalContent {
  id: number;
  body_text: string;
  title: string;
  type: string;
}

export interface ReflectiveQuestion {
  id: number;
  body_text: string;
}

export interface Summary {
  id: number;
  title: string;
  body_text: string;
}
