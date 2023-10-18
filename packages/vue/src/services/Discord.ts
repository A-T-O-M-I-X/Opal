import type { Presence } from "discord-rpc";
import type { IMachine } from "../types/api/machine";
import type { AppState } from "./state/AppState";
import { getMachineOsImageKey, nodeEmit } from "/@/services/logic";
export class Discord {
	constructor(public state: AppState) {}

	public updatePresence(args: Presence) {
		this.state.settings.client.enable_rich_presence && nodeEmit("rpc", args);
	}

	public clearPresence() {
		nodeEmit("rpc-clear");
	}

	/* public setCurrentlyWatchingMachine(machine: IMachine) {
		this.updatePresence({
			state: "Monitoring Machines",
			largeImageKey: "opal",
			largeImageText: "Opal Cloud",
			buttons: [
				{
					label: "Website",
					url: "https://Opal.atomix.one",
				},
				{
					label: "GitHub",
					url: "https://github.com/A-T-O-M-I-X/Opal",
				},
			],
		});
	} */
}
