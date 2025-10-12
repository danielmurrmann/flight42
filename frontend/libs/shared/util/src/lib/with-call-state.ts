import { patchState, signalMethod, signalStoreFeature, withLinkedState, withMethods, withState } from '@ngrx/signals';

export function withCallState() {
    return signalStoreFeature(
        withState({
            _isLoading: false
        }),
        withLinkedState(store => ({
            showLoading: () => store._isLoading()
        })),
        withMethods(store => ({
            connectIsLoading: signalMethod<boolean>(_isLoading => patchState(store, { _isLoading }))
        }))
    )
}

export function setIsLoading(isLoading: boolean) {
    return { _isLoading: isLoading };
}