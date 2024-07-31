const createCollection = (
    path: string, 
    documentIds: string[]
) => (
    {path, documentIds}
)

export const collections = {
    ido: createCollection('/ido', ['DcuhwNEzO0DDWL66BQ3a']),
    projects: createCollection('/projects', ['u9nmg0ZY0jdQM03TbHKj']),
}