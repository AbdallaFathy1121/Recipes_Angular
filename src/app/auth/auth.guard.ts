import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "./auth.service";
import { inject } from "@angular/core";
import { Observable, map, take } from "rxjs";

export const AuthGuard: CanActivateFn = (
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot,
    router: Router = inject(Router),
    authService: AuthService = inject(AuthService)
) : 
    boolean | 
    UrlTree | 
    Promise<boolean | UrlTree> | 
    Observable<boolean | UrlTree> => {

    return authService.user.pipe(
        take(1),
        map(user => {
            const isAuth = !!user;
            if (isAuth) {
                return true;
            }
            else {
                return router.createUrlTree(['/auth']);
            }
        })
    )


}