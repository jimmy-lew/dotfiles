-- set colorscheme to nightfly with protected call
-- in case it isn't installed
-- Lua initialization file
local status, _ = pcall(vim.cmd, "colorscheme moonfly")

vim.g.moonflyTransparent = true

if not status then
	print("Colorscheme not found!") -- print error if colorscheme not installed
	return
end
