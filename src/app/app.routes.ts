import { Routes } from '@angular/router';
import { activefGuard } from './activef.guard';
import { ActivatecGuard } from './activatec.guard';
import { activateChildfGuard } from './activate-childf.guard';
import { ActivateChildcGuard } from './activate-childc.guard';
import { DeactivatecGuard } from './deactivatec.guard';
import { deactivatefGuard } from './deactivatef.guard';
import { matchfGuard } from './matchf.guard';
import { MatchcGuard } from './matchc.guard';
import { IdsssResolver } from './idsss.resolver';
import { idsss1Resolver } from './idsss1.resolver';

export const routes: Routes = [
    {
        path: 'dummy',
        loadComponent: () => import('./files/files.component').then(m => m.FilesComponent),
        canActivate: [activefGuard, ActivatecGuard],
        canActivateChild: [activateChildfGuard, ActivateChildcGuard],
        canDeactivate: [deactivatefGuard, DeactivatecGuard],
        canMatch: [matchfGuard, MatchcGuard],
        resolve: { 
            dataC: IdsssResolver,
            dataF: idsss1Resolver,
        }
    }
];
