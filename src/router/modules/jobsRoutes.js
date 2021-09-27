import Jobs from '../../views/jobs/Jobs';
import JobDetails from '../../views/jobs/JobDetails';
import JobCreate from '../../views/jobs/JobCreate';
import JobEdit from '../../views/jobs/JobEdit';

import { ADMIN, MODERATOR, USER } from '../guards/permissionsHierarchy';

export default [
    {
        path: '/jobs',
        name: 'Jobs',
        component: Jobs,
        meta: { permissions: USER },
        children: [
          {
            path: ':id',
            name: 'JobDetails',
            component: JobDetails,
            props: true,
            meta: { permissions: USER }
          },
          {
            path: 'create',
            name: 'JobCreate',
            component: JobCreate,
            meta: { permissions: ADMIN },
          },
          {
            path: ':id/edit',
            name: 'JobEdit',
            component: JobEdit,
            props: true,
            meta: { permissions: MODERATOR },
          },
        ]
      },
]