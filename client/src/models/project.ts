interface Project {
  id: string;
  name: string;
  description: string;
  status: string;
  client: Client;
}

interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export type { Project, Client };
