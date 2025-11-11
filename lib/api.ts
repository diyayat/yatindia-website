const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  captchaToken: string;
}

export interface ProjectFormData {
  services: string[];
  customService?: string;
  industries: string[];
  customIndustry?: string;
  timeline: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  projectDescription: string;
  additionalQuestions?: string;
  howDidYouHear?: string;
  previousExperience?: string;
  captchaToken: string;
}

export interface CareerFormData {
  name: string;
  email: string;
  phone: string;
  position?: string;
  experience?: string;
  message: string;
  resume?: File;
  captchaToken: string;
}

export const api = {
  async submitContact(data: ContactFormData) {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to submit contact form');
    }

    return response.json();
  },

  async submitProject(data: ProjectFormData) {
    const response = await fetch(`${API_BASE_URL}/project`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to submit project inquiry');
    }

    return response.json();
  },

  async submitCareer(data: CareerFormData) {
    const formData = new FormData();
    
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('message', data.message);
    formData.append('captchaToken', data.captchaToken);
    
    if (data.position) {
      formData.append('position', data.position);
    }
    if (data.experience) {
      formData.append('experience', data.experience);
    }
    if (data.resume) {
      formData.append('resume', data.resume);
    }

    const response = await fetch(`${API_BASE_URL}/career`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to submit career application');
    }

    return response.json();
  },
};

