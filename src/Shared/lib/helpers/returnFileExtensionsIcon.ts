import unknown from "@/Shared/assets/img/fileExtensions/unknown_filetype_icon_177514.svg";
import avi from "@/Shared/assets/img/fileExtensions/avi_filetype_icon_177545.svg";
import css from "@/Shared/assets/img/fileExtensions/css_filetype_icon_177544.svg";
import csv from "@/Shared/assets/img/fileExtensions/csv_filetype_icon_177543.svg";
import dbf from "@/Shared/assets/img/fileExtensions/dbf_filetype_icon_177542.svg";
import doc from "@/Shared/assets/img/fileExtensions/doc_filetype_icon_177541.svg";
import dwg from "@/Shared/assets/img/fileExtensions/dwg_filetype_icon_177540.svg";
import exe from "@/Shared/assets/img/fileExtensions/exe_filetype_icon_177539.svg";
import mp4 from "@/Shared/assets/img/fileExtensions/filetype_mp_icon_177527.svg";
import mp3 from "@/Shared/assets/img/fileExtensions/filetype_mp_icon_177528.svg";
import fla from "@/Shared/assets/img/fileExtensions/fla_filetype_icon_177538.svg";
import html from "@/Shared/assets/img/fileExtensions/html_filetype_icon_177535.svg";
import iso from "@/Shared/assets/img/fileExtensions/iso_filetype_icon_177534.svg";
import js from "@/Shared/assets/img/fileExtensions/js_filetype_icon_177532.svg";
import json from "@/Shared/assets/img/fileExtensions/json_filetype_icon_177531.svg";
import pdf from "@/Shared/assets/img/fileExtensions/pdf_filetype_icon_177525.svg";
import psd from "@/Shared/assets/img/fileExtensions/psd_filetype_icon_177521.svg";
import rar from "@/Shared/assets/img/fileExtensions/rar_filetype_icon_177520.svg";
import svg from "@/Shared/assets/img/fileExtensions/svg_filetype_icon_177518.svg";
import tiff from "@/Shared/assets/img/fileExtensions/tiff_filetype_icon_177516.svg";
import txt from "@/Shared/assets/img/fileExtensions/txt_filetype_icon_177515.svg";
import wav from "@/Shared/assets/img/fileExtensions/wav_filetype_icon_177512.svg";
import xls from "@/Shared/assets/img/fileExtensions/xls_filetype_icon_177510.svg";
import z from "@/Shared/assets/img/fileExtensions/z_filetype_zip_icon_177551.svg";
import zip from "@/Shared/assets/img/fileExtensions/zip_filetype_icon_177508.svg";
import gif from "@/Shared/assets/img/fileExtensions/gif_filetype_icon_177536.svg";
import png from "@/Shared/assets/img/fileExtensions/png_filetype_icon_177523.svg";
import jpg from "@/Shared/assets/img/fileExtensions/jpg_filetype_icon_177533.svg";
import folder from "@/Shared/assets/img/fileExtensions/folder.svg";

export const returnFileExtensionsIcon = (type: string) => {
	type = type.toLowerCase();
	switch (type) {
		case "dir":
			return folder;
		case "avi":
			return avi;
		case "css":
			return css;
		case "scss":
			return css;
		case "csv":
			return csv;
		case "dbf":
			return dbf;
		case "doc":
			return doc;
		case "docx":
			return doc;
		case "dwg":
			return dwg;
		case "exe":
			return exe;
		case "mp4":
			return mp4;
		case "mp3":
			return mp3;
		case "fla":
			return fla;
		case "html":
			return html;
		case "iso":
			return iso;
		case "js":
			return js;
		case "json":
			return json;
		case "pdf":
			return pdf;
		case "psd":
			return psd;
		case "rar":
			return rar;
		case "svg":
			return svg;
		case "tiff":
			return tiff;
		case "txt":
			return txt;
		case "wav":
			return wav;
		case "xls":
			return xls;
		case "xlsx":
			return xls;
		case "7z":
			return z;
		case "zip":
			return zip;
		case "gif":
			return gif;
		case "png":
			return png;
		case "jpg":
			return jpg;
		default:
			return unknown;
	}
};
