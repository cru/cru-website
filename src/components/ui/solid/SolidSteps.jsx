import { For, Match, Show, Switch } from 'solid-js'

const SolidSteps = (props) => {
  const getStepIcon = (idx = 0) => {
    return (
      <Switch>
        <Match when={props.activeStep < idx}>
          <div class="mx-[-1px] flex size-7 shrink-0 items-center justify-center rounded-full border-2 border-gray-300 transition-all duration-300 ease-in-out hover:scale-110 hover:border-gray-400">
            <span class="h-3 w-3 rounded-full bg-gray-300 transition-all duration-300 ease-in-out"></span>
          </div>
        </Match>
        <Match when={props.activeStep === idx}>
          <div class="mx-[-1px] flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-green-500 transition-all duration-500 ease-in-out animate-pulse scale-110 shadow-lg shadow-green-500/30">
            <span class="h-3 w-3 rounded-full bg-green-500 transition-all duration-500 ease-in-out animate-ping"></span>
          </div>
        </Match>
        <Match when={props.activeStep > idx}>
          <div class="mx-[-1px] flex size-7 shrink-0 items-center justify-center rounded-full border-2 border-green-500 transition-all duration-700 ease-out hover:scale-110 hover:shadow-lg hover:shadow-green-500/30 animate-fade-in">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 fill-green-500 transition-all duration-500 ease-out animate-bounce-in"
              viewBox="0 0 24 24"
            >
              <title>Step completed</title>
              <path
                d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                data-original="#000000"
              />
            </svg>
          </div>
        </Match>
      </Switch>
    )
  }

  return (
    <div class="w-lg">
      <ol class="flex flex-col items-start justify-center">
        <For each={props.steps}>
          {(item, index) =>
            index() === props.steps.length - 1 ? (
              <li
                class="relative flex flex-col items-center transition-all duration-500 ease-out animate-slide-in"
                style={`animation-delay: ${index() * 100}ms`}
              >
                <div class="absolute top-0 left-full ml-4 w-max transition-all duration-300 ease-out hover:translate-x-1">
                  <p class="text-[10px] font-semibold text-slate-400 transition-colors duration-200">
                    STEP {index() + 1}
                  </p>
                  <h6
                    class={`text-sm font-semibold transition-all duration-300 ease-out ${
                      props.activeStep === index()
                        ? 'text-green-600 scale-105'
                        : props.activeStep > index()
                          ? 'text-green-500'
                          : 'text-slate-400'
                    }`}
                  >
                    {item}
                  </h6>
                </div>
                {getStepIcon(index())}
              </li>
            ) : (
              <li
                class="relative flex flex-col items-center transition-all duration-500 ease-out animate-slide-in"
                style={`animation-delay: ${index() * 100}ms`}
              >
                <div class="absolute top-0 left-full ml-4 w-max transition-all duration-300 ease-out hover:translate-x-1">
                  <p class="text-[10px] font-semibold text-slate-400 transition-colors duration-200">
                    STEP {index() + 1}
                  </p>
                  <h6
                    class={`text-sm font-semibold transition-all duration-300 ease-out ${
                      props.activeStep === index()
                        ? 'text-green-600 scale-105'
                        : props.activeStep > index()
                          ? 'text-green-500'
                          : 'text-slate-900'
                    }`}
                  >
                    {item}
                  </h6>
                </div>
                {getStepIcon(index())}
                <Show
                  when={props.activeStep > index()}
                  fallback={
                    <div class="h-16 w-0.5 bg-gray-300 transition-all duration-300 ease-in-out"></div>
                  }
                >
                  <div class="h-16 w-0.5 bg-green-500 transition-all duration-700 ease-out animate-grow-height"></div>
                </Show>
              </li>
            )
          }
        </For>
      </ol>
    </div>
  )
}

export default SolidSteps
