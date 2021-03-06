"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VariableDecorator = exports.FunctionDecorator = exports.ClassDecorator = exports.Decorator = exports.TopLevelDecorator = exports.registerDecorator = void 0;
const transformer_1 = require("./transformer");
const utils_1 = require("./utils");
function registerDecorator(decorator) {
    TopLevelDecorator.registerVisitor(decorator);
    return TopLevelDecorator;
}
exports.registerDecorator = registerDecorator;
class TopLevelDecorator extends transformer_1.PathTransformVisitor {
    static registerVisitor(visitor) {
        TopLevelDecorator._visitor = visitor;
    }
    get visitor() {
        return TopLevelDecorator._visitor;
    }
    visitDecoratorNode(node) {
        if (utils_1.decorates(node, this.visitor.name)) {
            this.visitor.currentPath = this.currentParentPath;
            this.visitor.visit(this.currentParent);
        }
    }
    afterParse(_) {
        transformer_1.mergeTransformer(this, this.visitor);
        this.visit(this.program.sources.filter(this.visitor.sourceFilter));
    }
}
exports.TopLevelDecorator = TopLevelDecorator;
class Decorator extends transformer_1.PathTransformVisitor {
    /**
     * Default filter that removes library files
     */
    get sourceFilter() {
        return utils_1.not(utils_1.isLibrary);
    }
}
exports.Decorator = Decorator;
class ClassDecorator extends Decorator {
}
exports.ClassDecorator = ClassDecorator;
class FunctionDecorator extends Decorator {
}
exports.FunctionDecorator = FunctionDecorator;
class VariableDecorator extends Decorator {
}
exports.VariableDecorator = VariableDecorator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlY29yYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQ0FBdUU7QUFXdkUsbUNBQW9EO0FBRXBELFNBQWdCLGlCQUFpQixDQUFDLFNBQTJCO0lBQzNELGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM3QyxPQUFPLGlCQUFpQixDQUFDO0FBQzNCLENBQUM7QUFIRCw4Q0FHQztBQU9ELE1BQWEsaUJBQWtCLFNBQVEsa0NBQW9CO0lBR3pELE1BQU0sQ0FBQyxlQUFlLENBQUMsT0FBeUI7UUFDOUMsaUJBQWlCLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztJQUN2QyxDQUFDO0lBRUQsSUFBWSxPQUFPO1FBQ2pCLE9BQU8saUJBQWlCLENBQUMsUUFBUSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxJQUFtQjtRQUNwQyxJQUFJLGlCQUFTLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1lBQ2xELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUN4QztJQUNILENBQUM7SUFFRCxVQUFVLENBQUMsQ0FBUztRQUNsQiw4QkFBZ0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUNyRSxDQUFDO0NBQ0Y7QUF0QkQsOENBc0JDO0FBRUQsTUFBc0IsU0FBVSxTQUFRLGtDQUFvQjtJQUMxRDs7T0FFRztJQUNILElBQUksWUFBWTtRQUNkLE9BQU8sV0FBRyxDQUFDLGlCQUFTLENBQUMsQ0FBQztJQUN4QixDQUFDO0NBR0Y7QUFURCw4QkFTQztBQUVELE1BQXNCLGNBQWUsU0FBUSxTQUFTO0NBSXJEO0FBSkQsd0NBSUM7QUFFRCxNQUFzQixpQkFBa0IsU0FBUSxTQUFTO0NBRXhEO0FBRkQsOENBRUM7QUFFRCxNQUFzQixpQkFBa0IsU0FBUSxTQUFTO0NBRXhEO0FBRkQsOENBRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYXRoVHJhbnNmb3JtVmlzaXRvciwgbWVyZ2VUcmFuc2Zvcm1lciB9IGZyb20gXCIuL3RyYW5zZm9ybWVyXCI7XG5pbXBvcnQge1xuICBDbGFzc0RlY2xhcmF0aW9uLFxuICBGaWVsZERlY2xhcmF0aW9uLFxuICBNZXRob2REZWNsYXJhdGlvbixcbiAgUGFyc2VyLFxuICBWYXJpYWJsZURlY2xhcmF0aW9uLFxuICBGdW5jdGlvbkRlY2xhcmF0aW9uLFxuICBTb3VyY2UsXG4gIERlY29yYXRvck5vZGUsXG59IGZyb20gXCIuLi9hc1wiO1xuaW1wb3J0IHsgZGVjb3JhdGVzLCBub3QsIGlzTGlicmFyeSB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckRlY29yYXRvcihkZWNvcmF0b3I6IERlY29yYXRvclZpc2l0b3IpIHtcbiAgVG9wTGV2ZWxEZWNvcmF0b3IucmVnaXN0ZXJWaXNpdG9yKGRlY29yYXRvcik7XG4gIHJldHVybiBUb3BMZXZlbERlY29yYXRvcjtcbn1cblxuaW50ZXJmYWNlIERlY29yYXRvclZpc2l0b3IgZXh0ZW5kcyBQYXRoVHJhbnNmb3JtVmlzaXRvciB7XG4gIG5hbWU6IHN0cmluZztcbiAgc291cmNlRmlsdGVyOiAoczogU291cmNlKSA9PiBib29sO1xufVxuXG5leHBvcnQgY2xhc3MgVG9wTGV2ZWxEZWNvcmF0b3IgZXh0ZW5kcyBQYXRoVHJhbnNmb3JtVmlzaXRvciB7XG4gIHByaXZhdGUgc3RhdGljIF92aXNpdG9yOiBEZWNvcmF0b3JWaXNpdG9yO1xuXG4gIHN0YXRpYyByZWdpc3RlclZpc2l0b3IodmlzaXRvcjogRGVjb3JhdG9yVmlzaXRvcik6IHZvaWQge1xuICAgIFRvcExldmVsRGVjb3JhdG9yLl92aXNpdG9yID0gdmlzaXRvcjtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IHZpc2l0b3IoKTogRGVjb3JhdG9yVmlzaXRvciB7XG4gICAgcmV0dXJuIFRvcExldmVsRGVjb3JhdG9yLl92aXNpdG9yO1xuICB9XG5cbiAgdmlzaXREZWNvcmF0b3JOb2RlKG5vZGU6IERlY29yYXRvck5vZGUpIHtcbiAgICBpZiAoZGVjb3JhdGVzKG5vZGUsIHRoaXMudmlzaXRvci5uYW1lKSkge1xuICAgICAgdGhpcy52aXNpdG9yLmN1cnJlbnRQYXRoID0gdGhpcy5jdXJyZW50UGFyZW50UGF0aDtcbiAgICAgIHRoaXMudmlzaXRvci52aXNpdCh0aGlzLmN1cnJlbnRQYXJlbnQpO1xuICAgIH1cbiAgfVxuXG4gIGFmdGVyUGFyc2UoXzogUGFyc2VyKTogdm9pZCB7XG4gICAgbWVyZ2VUcmFuc2Zvcm1lcih0aGlzLCB0aGlzLnZpc2l0b3IpO1xuICAgIHRoaXMudmlzaXQodGhpcy5wcm9ncmFtLnNvdXJjZXMuZmlsdGVyKHRoaXMudmlzaXRvci5zb3VyY2VGaWx0ZXIpKTtcbiAgfVxufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRGVjb3JhdG9yIGV4dGVuZHMgUGF0aFRyYW5zZm9ybVZpc2l0b3Ige1xuICAvKipcbiAgICogRGVmYXVsdCBmaWx0ZXIgdGhhdCByZW1vdmVzIGxpYnJhcnkgZmlsZXNcbiAgICovXG4gIGdldCBzb3VyY2VGaWx0ZXIoKTogKHM6IFNvdXJjZSkgPT4gYm9vbCB7XG4gICAgcmV0dXJuIG5vdChpc0xpYnJhcnkpO1xuICB9XG5cbiAgYWJzdHJhY3QgZ2V0IG5hbWUoKTogc3RyaW5nO1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2xhc3NEZWNvcmF0b3IgZXh0ZW5kcyBEZWNvcmF0b3Ige1xuICBhYnN0cmFjdCB2aXNpdEZpZWxkRGVjbGFyYXRpb24obm9kZTogRmllbGREZWNsYXJhdGlvbik6IHZvaWQ7XG4gIGFic3RyYWN0IHZpc2l0TWV0aG9kRGVjbGFyYXRpb24obm9kZTogTWV0aG9kRGVjbGFyYXRpb24pOiB2b2lkO1xuICBhYnN0cmFjdCB2aXNpdENsYXNzRGVjbGFyYXRpb24obm9kZTogQ2xhc3NEZWNsYXJhdGlvbik6IHZvaWQ7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGdW5jdGlvbkRlY29yYXRvciBleHRlbmRzIERlY29yYXRvciB7XG4gIGFic3RyYWN0IHZpc2l0RnVuY3Rpb25EZWNsYXJhdGlvbihub2RlOiBGdW5jdGlvbkRlY2xhcmF0aW9uKTogdm9pZDtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFZhcmlhYmxlRGVjb3JhdG9yIGV4dGVuZHMgRGVjb3JhdG9yIHtcbiAgYWJzdHJhY3QgdmlzaXRWYXJpYWJsZURlY2xhcmF0aW9uKG5vZGU6IFZhcmlhYmxlRGVjbGFyYXRpb24pOiB2b2lkO1xufVxuIl19