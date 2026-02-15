import { useTranslation } from 'react-i18next';
import type { Project } from '@/shared/types';

interface ProjectData {
  id: string;
  image: string;
  githubUrl: string;
  stack: string[];
  systemId: string;
  translations: {
    vi: {
      title: string;
      category: string;
      description: string;
    };
    en: {
      title: string;
      category: string;
      description: string;
    };
  };
}

const PROJECTS_DATA: ProjectData[] = [
  {
    id: 'facebookClone',
    systemId: 'SYS-01',
    image: '/projects/facebook.png',
    githubUrl: 'https://github.com/vantrong2405/Project-FaceBook',
    stack: ["NodeJS", "MongoDB", "Tailwinds", "Bootstrap", "FlowBite", "Typescript"],
    translations: {
      vi: {
        title: "Facebook Clone",
        category: "Mạng xã hội",
        description: "Bản sao Facebook với đầy đủ tính năng, thiết kế hiện đại và xử lý cơ sở dữ liệu mạnh mẽ."
      },
      en: {
        title: "Facebook Clone",
        category: "Social Network",
        description: "Fully functional Facebook replica with modern design and robust database handling."
      }
    }
  },
  {
    id: 'movieWebsite',
    systemId: 'SYS-02',
    image: '/projects/movie.png',
    githubUrl: 'https://github.com/vantrong2405/Project-Website-Neko-Film',
    stack: ["Laravel", "SQL", "VueJS", "Bootstrap"],
    translations: {
      vi: {
        title: "Movie Website",
        category: "Giải trí",
        description: "Website xem phim trực tuyến (Neko Film) với giao diện mượt mà, tập trung vào trải nghiệm người dùng."
      },
      en: {
        title: "Movie Website",
        category: "Entertainment",
        description: "Online movie streaming website (Neko Film) with smooth UI, focused on user experience."
      }
    }
  },
  {
    id: 'shopeeClone',
    systemId: 'SYS-03',
    image: '/projects/shopee.png',
    githubUrl: 'https://github.com/vantrong2405/Project-Shopee-Clone',
    stack: ["ReactJS", "Tailwinds", "Typescript"],
    translations: {
      vi: {
        title: "Shopee Clone",
        category: "Thương mại điện tử",
        description: "Nền tảng thương mại điện tử responsive lấy cảm hứng từ Shopee với các chức năng nâng cao."
      },
      en: {
        title: "Shopee Clone",
        category: "E-Commerce",
        description: "Responsive e-commerce platform inspired by Shopee with advanced functionalities."
      }
    }
  },
  {
    id: 'diceGame',
    systemId: 'SYS-04',
    image: '/projects/dice.png',
    githubUrl: 'https://github.com/vantrong2405/FullStack-Learning/tree/main/Project-Dice-Game',
    stack: ["VueJS", "Tailwinds"],
    translations: {
      vi: {
        title: "Dice Game Website",
        category: "Trò chơi",
        description: "Trò chơi đổ xúc xắc tương tác với giao diện tối giản nhưng bắt mắt."
      },
      en: {
        title: "Dice Game Website",
        category: "Gaming",
        description: "Interactive dice game website with a minimalist yet eye-catching interface."
      }
    }
  },
  {
    id: 'nroGame',
    systemId: 'SYS-05',
    image: '/projects/game.png',
    githubUrl: 'https://github.com/vantrong2405/FullStack-Learning/tree/main/Project-Website-Ngocrongonline',
    stack: ["Laravel", "VueJS", "Bootstrap"],
    translations: {
      vi: {
        title: "Website Game Nro",
        category: "Cộng đồng Game",
        description: "Trang web cộng đồng dành cho người chơi Ngọc Rồng Online với giao diện sôi động."
      },
      en: {
        title: "Website Game Nro",
        category: "Gaming Community",
        description: "Community website for Ngoc Rong Online players with a vibrant interface."
      }
    }
  },
  {
    id: 'coffeeShop',
    systemId: 'SYS-06',
    image: '/projects/coffee.png',
    githubUrl: 'https://github.com/vantrong2405/FullStack-Learning/tree/main/QL-Project-Website-Coffee-shop-management',
    stack: ["Laravel", "VueJS", "Bootstrap"],
    translations: {
      vi: {
        title: "Coffee Shop Management",
        category: "Hệ thống quản lý",
        description: "Hệ thống quản lý quán cà phê, hỗ trợ quản lý đơn hàng và vận hành cửa hàng hiệu quả."
      },
      en: {
        title: "Coffee Shop Management",
        category: "Management System",
        description: "System for managing coffee shops, supporting order management and efficient store operations."
      }
    }
  },
];

export const useProjects = (): Project[] => {
  const { i18n } = useTranslation();
  const currentLang = (i18n.language || 'en') as 'vi' | 'en';

  return PROJECTS_DATA.map((project) => ({
    title: project.translations[currentLang].title,
    category: project.translations[currentLang].category,
    systemId: project.systemId,
    description: project.translations[currentLang].description,
    stack: project.stack,
    githubUrl: project.githubUrl,
    image: project.image,
  }));
};
