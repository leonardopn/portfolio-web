import {
	SliceSimulator,
	SliceSimulatorParams,
	getSlices,
} from "@slicemachine/adapter-next/simulator";
import { SliceZone } from "@prismicio/react";

import { components } from "../../slices";

export default function SliceSimulatorPage({ searchParams }: SliceSimulatorParams) {
	const slices = getSlices(searchParams.state);

	return (
		<SliceSimulator>
			<SliceZone slices={slices} components={components} />
			<h1>Simulator</h1>
		</SliceSimulator>
	);
}
