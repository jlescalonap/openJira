
interface SeedData {
    entries: SeedEntry[];
}

interface SeedEntry {
    description: string;
    status: string;
    createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description:
        "Pendiente: Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      description:
        "En Progreso: Lorem Ipsum has been the industry, and scrambled it to make a type specimen book.",
      status: "in-progress",
      createdAt: Date.now(),
    },
    {
      description:
        "Terminadas: Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      status: "finished",
      createdAt: Date.now(),
    },
  ],
};
