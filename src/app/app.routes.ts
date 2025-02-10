import { Routes } from '@angular/router';
import { AppRoutes } from '../enums/routes-data.enum';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { EducationComponent } from './pages/education/education.component';

export const routes: Routes = [
    {
        path: AppRoutes.HOME,
        component: HomeComponent,
    },
    {
        path: AppRoutes.PROJECTS,
        component: ProjectsComponent,
    },
    {
        path: AppRoutes.EXPERIENCE,
        component: ExperienceComponent,
    },
    {
        path: AppRoutes.EDUCATION,
        component: EducationComponent,
    },
    {
        path: "**",
        redirectTo: AppRoutes.ERROR,
    },
    {
        path: AppRoutes.ERROR,
        component: ErrorComponent,
    }
];
