import { HttpInterceptorFn } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { inject } from '@angular/core';
import { LoadingService } from 'src/assets/services/loding.service';


export const httpLoadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);
  loadingService.setLoading(true);
  
  //  debugger
  return next(req).pipe(
    finalize(() => loadingService.setLoading(false))
  );
};