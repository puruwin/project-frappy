export interface BlogPost {
  url: string;
  frontmatter: {
    title: string;
    description: string;
    image?: string;
    date: string;
    author: string;
    tags: string[];
  };
  Content?: any;
  getHeadings?: () => Array<{ depth: number; slug: string; text: string }>;
}

/**
 * Obtiene todos los posts del blog ordenados por fecha (más recientes primero)
 */
export const getAllPosts = async (): Promise<BlogPost[]> => {
  const posts = Object.values(
    import.meta.glob<BlogPost>('../pages/blog/posts/*.md', { eager: true })
  ) as BlogPost[];

  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );
};

/**
 * Filtra posts por tag
 */
export const getPostsByTag = (posts: BlogPost[], tag: string): BlogPost[] => {
  return posts.filter((post) =>
    post.frontmatter.tags?.some(
      (t) => t.toLowerCase() === tag.toLowerCase()
    )
  );
};

/**
 * Extrae todos los tags únicos de todos los posts
 */
export const getAllTags = (posts: BlogPost[]): string[] => {
  const tagsSet = new Set<string>();
  posts.forEach((post) => {
    post.frontmatter.tags?.forEach((tag) => tagsSet.add(tag));
  });
  return Array.from(tagsSet).sort();
};

/**
 * Obtiene posts relacionados basándose en tags compartidos
 */
export const getRelatedPosts = (
  currentPost: BlogPost,
  allPosts: BlogPost[],
  limit: number = 3
): BlogPost[] => {
  const currentTags = currentPost.frontmatter.tags || [];
  const related = allPosts
    .filter((post) => post.url !== currentPost.url)
    .map((post) => {
      const sharedTags = post.frontmatter.tags?.filter((tag) =>
        currentTags.includes(tag)
      ) || [];
      return { post, score: sharedTags.length };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.post);

  return related;
};

/**
 * Calcula el tiempo estimado de lectura en minutos
 * Basado en ~200 palabras por minuto
 * Si no se proporciona contenido, retorna un valor por defecto
 */
export const estimateReadingTime = (content?: string): number => {
  if (!content) return 5;
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return minutes;
};

/**
 * Genera una tabla de contenidos a partir de los headings del contenido
 */
export const generateTableOfContents = (
  headings: Array<{ depth: number; slug: string; text: string }>
): Array<{ depth: number; slug: string; text: string }> => {
  return headings.filter((heading) => heading.depth <= 3);
};

/**
 * Formatea una fecha en formato legible en español
 */
export const formatDate = (dateString: string | Date): string => {
  // Si ya es un Date, usarlo directamente
  let date: Date;
  if (dateString instanceof Date) {
    date = dateString;
  } else {
    // Intentar parsear la fecha de string
    // Si es formato YYYY-MM-DD, agregar tiempo para evitar problemas de zona horaria
    if (typeof dateString === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
      date = new Date(dateString + 'T00:00:00');
    } else {
      date = new Date(dateString);
    }
  }
  
  // Validar que la fecha sea válida
  if (isNaN(date.getTime())) {
    console.error('Invalid date:', dateString);
    return 'Fecha no disponible';
  }
  
  return new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};

