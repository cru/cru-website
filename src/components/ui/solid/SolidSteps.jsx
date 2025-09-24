import { createEffect, createSignal, For, Match, Switch } from 'solid-js'

const SolidSteps = (props) => {
  const [delayedActiveStep, setDelayedActiveStep] = createSignal(props.activeStep || 0)

  createEffect(() => {
    if (props.activeStep > delayedActiveStep()) {
      // Delay the step activation by the line animation duration (700ms)
      setTimeout(() => {
        setDelayedActiveStep(props.activeStep)
      }, 700)
    } else if (props.activeStep < delayedActiveStep()) {
      // Handle backward navigation immediately
      setDelayedActiveStep(props.activeStep)
    }
  })

  const getStepIcon = (idx = 0) => {
    return (
      <Switch>
        <Match when={delayedActiveStep() < idx}>
          <div class="mx-[-1px] flex size-7 shrink-0 items-center justify-center rounded-full border-2 border-gray-300 transition-all duration-300 ease-in-out hover:scale-110 hover:border-gray-400">
            <span class="h-3 w-3 rounded-full bg-gray-300 transition-all duration-300 ease-in-out"></span>
          </div>
        </Match>
        <Match when={delayedActiveStep() === idx}>
          <div class="animate-step-activate z-10 mx-[-1px] flex h-7 w-7 shrink-0 scale-110 animate-pulse items-center justify-center rounded-full border-2 border-emerald-500 shadow-lg shadow-emerald-500/30 transition-all duration-500 ease-in-out">
            <span class="h-3 w-3 animate-ping rounded-full bg-emerald-500 transition-all duration-500 ease-in-out"></span>
          </div>
        </Match>
        <Match when={delayedActiveStep() > idx}>
          <div class="animate-fade-in mx-[-1px] flex size-7 shrink-0 items-center justify-center rounded-full border-2 border-emerald-500 transition-all duration-700 ease-out hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="animate-bounce-in h-4 w-4 fill-emerald-500 transition-all duration-500 ease-out"
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
    <div class="w-lg mt-6">
      <ol class="flex flex-col items-start justify-center">
        <For each={props.steps}>
          {(item, index) =>
            index() === props.steps.length - 1 ? (
              <li
                class="animate-slide-down relative flex -translate-y-5 flex-col items-center opacity-0 transition-all duration-500 ease-out"
                style={`animation-delay: ${index() * 100}ms; animation-fill-mode: forwards;`}
              >
                <div class="absolute top-0 left-full ml-4 w-max transition-all duration-300 ease-out hover:translate-x-1">
                  <p class="text-[10px] font-semibold text-slate-400 transition-colors duration-200">
                    STEP {index() + 1}
                  </p>
                  <h6
                    class={`text-sm font-semibold transition-all duration-300 ease-out ${
                      delayedActiveStep() === index()
                        ? 'scale-105 text-emerald-600'
                        : delayedActiveStep() > index()
                          ? 'text-emerald-500'
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
                class="animate-slide-down relative flex -translate-y-5 flex-col items-center opacity-0 transition-all duration-500 ease-out"
                style={`animation-delay: ${index() * 100}ms; animation-fill-mode: forwards;`}
              >
                <div class="absolute top-0 left-full ml-4 w-max transition-all duration-300 ease-out hover:translate-x-1">
                  <p class="text-[10px] font-semibold text-slate-400 transition-colors duration-200">
                    STEP {index() + 1}
                  </p>
                  <h6
                    class={`text-sm font-semibold transition-all duration-300 ease-out ${
                      delayedActiveStep() === index()
                        ? 'scale-105 text-emerald-600'
                        : delayedActiveStep() > index()
                          ? 'text-emerald-500'
                          : 'text-slate-400'
                    }`}
                  >
                    {item}
                  </h6>
                </div>
                {getStepIcon(index())}
                <div class="relative h-16 w-0.5 overflow-hidden">
                  {/* Background grey line */}
                  <div class="absolute inset-0 w-full bg-gray-300 transition-all duration-300 ease-in-out"></div>
                  {/* Animated green line that fills from top to bottom */}
                  <div
                    class={`absolute top-0 w-full bg-emerald-500 transition-all duration-700 ease-out ${
                      props.activeStep > index() ? 'animate-line-fill-down h-full' : 'h-0'
                    }`}
                  ></div>
                </div>
              </li>
            )
          }
        </For>
      </ol>
    </div>
  )
}

export default SolidSteps
