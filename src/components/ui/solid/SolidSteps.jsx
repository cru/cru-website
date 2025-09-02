import { createSignal, For, Match, Show, Switch } from "solid-js"

const SolidSteps = (props) => {
	const [activeStep, setActiveStep] = createSignal(0)

	const getStepIcon = (idx = 0) => {
		return (
			<Switch>
				<Match when={activeStep() < idx}>
					<div class="mx-[-1px] flex size-7 shrink-0 items-center justify-center rounded-full border-2">
						<span class="h-3 w-3 rounded-full bg-gray-300"></span>
					</div>
				</Match>
				<Match when={activeStep() === idx}>
					<div class="mx-[-1px] flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-green-500">
						<span class="h-3 w-3 rounded-full bg-green-500"></span>
					</div>
				</Match>
				<Match when={activeStep() > idx}>
					<div class="mx-[-1px] flex size-7 shrink-0 items-center justify-center rounded-full border-2 border-green-500">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-4 w-4 fill-green-500"
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
			<ol class="flex items-start flex-col justify-center">
				<For each={props.steps}>
					{(item, index) =>
						index() === props.steps.length - 1 ? (
							<li class="flex items-center flex-col relative">
								<div class="absolute top-0 left-full ml-4 w-max">
									<p class="text-[10px] font-semibold text-slate-400">
										STEP {index() + 1}
									</p>
									<h6 class="text-sm text-slate-400 font-semibold">{item}</h6>
								</div>
								{getStepIcon(index())}
							</li>
						) : (
							<li class="flex items-center flex-col relative">
								<div class="absolute top-0 left-full ml-4 w-max">
									<p class="text-[10px] font-semibold text-slate-400">
										STEP {index() + 1}
									</p>
									<h6 class="text-sm font-semibold text-slate-900">{item}</h6>
								</div>
								{getStepIcon(index())}
								<Show
									when={activeStep() > index()}
									fallback={<div class="w-0.5 h-16 bg-gray-300"></div>}
								>
									<div class="w-0.5 h-16 bg-green-500"></div>
								</Show>
							</li>
						)
					}
				</For>
			</ol>

			<button
				type="button"
				onClick={() => setActiveStep(activeStep() + 1)}
				class="mt-12 cursor-pointer"
			>
				Next
			</button>
		</div>
	)
}

export default SolidSteps
