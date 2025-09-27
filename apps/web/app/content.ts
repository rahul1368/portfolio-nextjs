// Re-export consolidated content from portfolio lib
export { 
  portfolioContent,
  getHeroData,
  getSkillsData,
  getExperienceData,
  getProjectsData,
  getContactData,
  getNavigationData,
  getFooterData,
  getSEOData
} from './portfolio/lib/content';

// Export as homepageContent for backward compatibility
import { portfolioContent } from './portfolio/lib/content';
export { portfolioContent as homepageContent };
