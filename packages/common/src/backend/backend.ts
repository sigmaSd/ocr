import type {
  FileUtils as FileUtilsType,
  ImageRaw as ImageRawType,
  InferenceSession as InferenceSessionType,
  ModelCreateOptions as ModelCreateOptionsType,
  SplitIntoLineImages as SplitIntoLineImagesType,
} from '#common/types'

let FileUtils: FileUtilsType = undefined as unknown as FileUtilsType
let ImageRaw: ImageRawType = undefined as unknown as ImageRawType
let InferenceSession: InferenceSessionType = undefined as unknown as InferenceSessionType
let splitIntoLineImages: SplitIntoLineImagesType = undefined as unknown as SplitIntoLineImagesType
let defaultModels: ModelCreateOptionsType['models'] = undefined as unknown as ModelCreateOptionsType['models']

export function registerBackend(backend: {
  FileUtils: FileUtilsType
  ImageRaw: ImageRawType
  InferenceSession: InferenceSessionType
  splitIntoLineImages: SplitIntoLineImagesType
  defaultModels: ModelCreateOptionsType['models']
}) {
  FileUtils = backend.FileUtils
  ImageRaw = backend.ImageRaw
  InferenceSession = backend.InferenceSession
  splitIntoLineImages = backend.splitIntoLineImages
  defaultModels = backend.defaultModels
}

export { FileUtils, ImageRaw, InferenceSession, splitIntoLineImages, defaultModels }
