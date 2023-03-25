export interface IFileToUpload {
	uploadId: string;
	name: string;
	progress: number;
	type: string;
	status: "normal" | "exception" | "active" | "success";
}
