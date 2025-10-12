import { patchState, signalMethod, signalStoreFeature, withHooks, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { debounceTime, pipe, tap } from 'rxjs';

export function withCallState() {
    return signalStoreFeature(
        withState({
            _isLoading: false,
            showLoading: false
        }),
        withMethods(store => ({
            connectIsLoading: signalMethod<boolean>(_isLoading => patchState(store, { _isLoading }))
        })),
        withHooks({
            onInit: store => {
                rxMethod<boolean>(pipe(debounceTime(500), tap(isLoading => patchState(store, { showLoading: isLoading }))))(store._isLoading);
            }
        })
    )
}

export function setIsLoading(isLoading: boolean) {
    return { _isLoading: isLoading };
}